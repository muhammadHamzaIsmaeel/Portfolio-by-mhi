// components/ServiceTestimonials.tsx
"use client";
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function ServiceTestimonials({}: { serviceId: string }) {
  // In a real implementation, you would fetch testimonials for this service
  const [testimonials] = useState<Testimonial[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "The web development service exceeded our expectations. The team delivered on time and provided excellent ongoing support.",
      rating: 5
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Startup Founder",
      content: "Incredible attention to detail. They understood our vision perfectly and translated it into a beautiful, functional website.",
      rating: 5
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      content: "Our online sales increased by 40% after the redesign. Highly recommend their services to any business.",
      rating: 4
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  if (testimonials.length === 0) return null;

  return (
    <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Client Testimonials</h2>
      
      <div className="relative">
        <FaQuoteLeft className="text-purple-200 text-4xl absolute -top-2 -left-2" />
        
        <div className="relative z-10">
          <p className="text-lg text-gray-700 italic mb-6">
          &quot;{testimonials[currentIndex].content}&quot;
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {testimonials.length > 1 && (
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white text-purple-600 hover:bg-purple-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white text-purple-600 hover:bg-purple-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}