import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import twilio from 'twilio';

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anonymous';
    await limiter.check(5, ip);

    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { message: 'First name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create document in Sanity
    // const contactSubmission = {
    //   _type: 'contact',
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   message,
    //   submittedAt: new Date().toISOString(),
    //   ipAddress: ip,
    // };

    // const sanityResult = await client.create(contactSubmission);
    // Send WhatsApp notification (non-blocking)
    try {
      await twilioClient.messages.create({
        body: `📢 New Contact Form Submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}\n\nIP: ${ip}`,
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        to: `whatsapp:${process.env.YOUR_WHATSAPP_NUMBER}`
      });
    } catch (whatsappError) {
      console.error('WhatsApp notification failed:', whatsappError);
      // Don't fail the whole request if WhatsApp fails
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    if (error instanceof Error && error.message === 'Rate limit exceeded') {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    console.error('Submission error:', error);
    return NextResponse.json(
      { message: 'Error submitting form' },
      { status: 500 }
    );
  }
}