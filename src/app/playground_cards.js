"use client";

import Header from './component/header';
import Footer from './component/footer'
import Hero_Section from "./component/hero_section";

const playgrounds = [
  {
    title: 'Detection',
    description: 'Upload an image and see how our model identifies objects within it. Experience the power of computer vision firsthand.',
    buttonText: 'TRY',
    href: '/detection',
    backgroundImage: 'url("/SL-022722-48830-13.jpg")',
  },
  {
    title: 'Predictive',
    description: 'Input your data and let our predictive models forecast future trends. Make data-driven decisions with confidence.',
    buttonText: 'PLAY',
    href: '/predictive',
    backgroundImage: 'url("/path/to/your/predictive-image.jpg")',
  },
  {
    title: 'Chatbot',
    description: 'Interact with our advanced Retrieval-Augmented Generation chatbot. Ask complex questions and get context-aware answers.',
    buttonText: 'TALK',
    href: '/api/chat',
    backgroundImage: 'url("/path/to/your/chatbot-image.jpg")',
  },
];

const ArrowIcon = () => (
  <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
  </svg>
);

export default function Playground_cards() {
  return (
    <div className="bg-gray-900 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {playgrounds.map((playground) => (
            <div
              key={playground.title}
              className="group relative h-80 rounded-lg overflow-hidden bg-cover bg-center shadow-lg transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: playground.backgroundImage }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
              <div className="relative p-6 flex flex-col justify-end h-full text-white">
                <h2 className="text-2xl font-bold">{playground.title}</h2>
                <p className="mt-2 text-gray-300 text-sm leading-relaxed h-20 overflow-hidden">{playground.description}</p>
                <a href={playground.href} className="flex items-center mt-4 w-fit px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
                  <span>{playground.buttonText}</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}