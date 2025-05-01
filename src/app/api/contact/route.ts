import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { client } from '@/sanity/lib/client';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max users per interval
});

export async function POST(request: Request) {
  try {
    // Get IP from headers (works on Vercel)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anonymous';
    
    // Apply rate limiting
    await limiter.check(5, ip); // 5 requests per minute per IP
    
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
    const contactSubmission = {
      _type: 'contact',
      firstName,
      lastName,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
      ipAddress: ip, // Optional: Store IP for moderation
    };

    await client.create(contactSubmission);

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