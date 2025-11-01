"use client";

export default function Hero_Section() {
  return (
    <div className="relative bg-gray-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <svg className="absolute -z-10 w-full h-full" width="1440" height="676" viewBox="0 0 1440 676" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)"/>
            <defs>
                <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 428 292)scale(812)">
                    <stop offset=".63" stopColor="#372AAC" stopOpacity="0"/>
                    <stop offset="1" stopColor="#372AAC"/>
                </radialGradient>
            </defs>
        </svg>
      </div>
      <div className="relative max-w-4xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Welcome to NEXGENAI
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          Explore the frontiers of Artificial Intelligence. Our playgrounds make complex technologies accessible and understandable for everyone.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <a
            href="#playgrounds"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
          >
            Explore Playgrounds
          </a>
        </div>
      </div>
    </div>
  );
}