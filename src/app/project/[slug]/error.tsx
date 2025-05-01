'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0e17] to-[#1a1f3a] text-center p-4">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong!</h2>
      <p className="text-violet-300 mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-violet-700 rounded hover:bg-violet-600 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}