"use client";
// import Image from 'next/image';

export default function AboutDetails() {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="text-center">
        <h1 className="text-5xl text-violet-950 font-bold">My Journey</h1>
        <p className="font-bold text-gray-600 mt-2">
          <i>Education, Certifications, and Achievements</i>
        </p>
        <span className="block h-1 w-24 mx-auto bg-gradient-to-r from-violet-600 to-yellow-600 mt-4"></span>
      </div>

      <div className="px-8 md:px-28 pt-12 space-y-16">
        {/* Education Section */}
        <div className="space-y-6">
          <h2 className="text-3xl text-violet-950 font-bold">🎓 Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg border-l-4 border-violet-600">
              <h3 className="text-xl text-violet-950 font-bold">
                Intermediate in Computer Science
              </h3>
              <p className="text-gray-700 mt-1">Govt. Jinnah College</p>
              <p className="text-gray-700">
                1st Year: <strong>70%</strong>
              </p>
              <p className="text-yellow-600">2nd Year result pending</p>
              <p className="text-sm text-gray-500 mt-1">2023 – 2025</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-xl text-violet-950 font-bold">
                Matriculation
              </h3>
              <p className="text-gray-700 mt-1">Hermain Acme Grammer School</p>
              <p className="text-gray-700">Grade: A+ (85%)</p>
              <p className="text-sm text-gray-500 mt-1">2011 – 2023</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-6">
          <h2 className="text-3xl text-violet-950 font-bold">
            📜 Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-violet-950">Agentic AI <span className="text-gray-500 text-lg">(continue)</span></h3>
              <p className="text-gray-700 mt-1">
                Governor Initiative FOR ARTIFICIAL INTELLIGENCE, WEB 3.0 &
                METAVERSE (GOVERNoR INITIATIVE)
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-violet-950">
                Front-End Development
              </h3>
              <p className="text-gray-700 mt-1">
                Governor Initiative FOR ARTIFICIAL INTELLIGENCE, WEB 3.0 &
                METAVERSE (GOVERNoR INITIATIVE)
              </p>
            </div>
          </div>
        </div>

        {/* Certificates Gallery */}
        <div className="space-y-6">
          <h2 className="text-3xl text-violet-950 font-bold">
            🖼️ Certificates Gallery
          </h2>
          <p className="text-gray-600">
            Here are some of the certificates I&apos;ve earned during my learning
            journey:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Certificate Card */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="w-full h-52 bg-gray-100">
                <img
                  src="/cer/FED.png"
                  alt="Front-End Development Certificate"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-700 font-medium py-2 px-2 border-t">
                Front-End Development Result
              </p>
            </div>

            {/* Certificate Card */}
            {/* <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="w-full h-52 bg-gray-100">
                <img
                  src="/certificates/web3.jpg"
                  alt="Web 3.0 & Metaverse Certificate"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-700 font-medium py-2 px-2 border-t">
                Web 3.0 & Metaverse Certificate
              </p>
            </div> */}

            {/* Certificate Card */}
            {/* <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="w-full h-52 bg-gray-100">
                <img
                  src="/certificates/solopreneur.jpg"
                  alt="Solopreneur Program Certificate"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-700 font-medium py-2 px-2 border-t">
                Solopreneur Program Certificate
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
