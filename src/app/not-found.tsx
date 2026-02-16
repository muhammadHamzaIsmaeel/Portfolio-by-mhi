import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description: "The page you are looking for does not exist. Return to homepage to explore web development services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40H0V0h40v40zM1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-8xl md:text-9xl font-bold text-white tracking-tighter mb-4">
          4<span className="text-neutral-500">0</span>4
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-neutral-400 font-light mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
