export default function Loading() {
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

      {/* Loader */}
      <div className="relative z-10 text-center">
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-16 h-16 rounded-full border-2 border-white/10 absolute inset-0"></div>
          {/* Spinning Ring */}
          <div className="w-16 h-16 rounded-full border-2 border-transparent border-t-white animate-spin"></div>
        </div>
        <p className="mt-6 text-neutral-400 font-light tracking-widest text-sm uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
