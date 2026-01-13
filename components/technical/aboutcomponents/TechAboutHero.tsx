'use client';

export default function TechAboutHero() {
  return (
    <section className="relative w-full bg-[#1E1E1E] py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FBFFDE 1px, transparent 1px),
              linear-gradient(to bottom, #FBFFDE 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Faded spots - Top Left */}
        <div
          className="absolute top-0 left-0 w-[40%] h-[40%] opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FBFFDE 1px, transparent 1px),
              linear-gradient(to bottom, #FBFFDE 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)'
          }}
        />

        {/* Faded spots - Center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FBFFDE 1px, transparent 1px),
              linear-gradient(to bottom, #FBFFDE 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'
          }}
        />

        {/* Faded spots - Bottom Right */}
        <div
          className="absolute bottom-0 right-0 w-[35%] h-[35%] opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FBFFDE 1px, transparent 1px),
              linear-gradient(to bottom, #FBFFDE 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at bottom right, black 0%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(circle at bottom right, black 0%, transparent 65%)'
          }}
        />
      </div>

      {/* Light Source */}
      <div className="absolute -top-[50%] -right-[50%] md:-top-[40%] md:-right-[30%] lg:-top-[30%] lg:-right-[20%] w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] lg:w-[60vw] lg:h-[60vw]">
        <div
          className="w-full h-full rounded-full opacity-30 blur-[100px] md:blur-[120px] lg:blur-[150px]"
          style={{
            background: 'radial-gradient(circle at top right, #D8F209 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-6 lg:gap-8">
          
          {/* Badge */}
          <div className="inline-block">
            <span className="text-[#D8F209] uppercase tracking-wider font-medium text-[clamp(10px,2.5vw,13px)]">
              About The Ladder Tech
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="text-[clamp(28px,5vw,56px)] leading-tight font-bold text-[#D8F209] max-w-5xl">
            Building Tomorrow's Solutions Today
          </h1>

          {/* Description */}
          <p className="text-[clamp(14px,3.5vw,18px)] leading-relaxed font-normal text-[#FBFFDE]/90 max-w-3xl">
            At The Ladder Tech, we're redefining what's possible with artificial intelligence, automation, and data analytics. Our mission is to empower enterprises with cutting-edge technical solutions that drive real transformation.
          </p>

        </div>
      </div>
    </section>
  );
}
