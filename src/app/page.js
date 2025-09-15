"use client";
import { useState } from "react";
import { FaFeatherAlt } from 'react-icons/fa';
import { MdAdjust } from 'react-icons/md';
import { PiOption } from 'react-icons/pi';

export default function Home() {
  const sendButton = <FaFeatherAlt />;
  const onProcessBtn = <MdAdjust />;
  const onOptionBtn = <PiOption />;

  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    if(inputValue === "") return alert("Please enter a value");
    e.preventDefault();
    console.log(inputValue);
  }
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Outer Container */}
      <div className="flex-1 flex flex-col max-w-md mx-auto w-full p-4">
        
        {/* Top Navigation */}
        <div className="flex justify-center gap-2 mb-6">
          <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            QR scanner
          </button>
          <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Chat
          </button>
          <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            NFC reader
          </button>
        </div>
  
        {/* Messages Container */}
        <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
          {/* Message 1 */}
          <div className="w-full rounded-md border border-blue-300 p-4 bg-white shadow-sm">
            <div className="flex animate-pulse space-x-4">
              <div className="size-10 rounded-full bg-gray-200 shrink-0"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                  </div>
                  <div className="h-2 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Message 2 */}
          <div className="w-full rounded-md border border-blue-300 p-4 bg-white shadow-sm">
            <div className="flex animate-pulse space-x-4">
              <div className="size-10 rounded-full bg-gray-200 shrink-0"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                  </div>
                  <div className="h-2 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Message 3 */}
          <div className="w-full rounded-md border border-blue-300 p-4 bg-white shadow-sm">
            <div className="flex animate-pulse space-x-4">
              <div className="size-10 rounded-full bg-gray-200 shrink-0"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                  </div>
                  <div className="h-2 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Message 4 */}
          <div className="w-full rounded-md border border-blue-300 p-4 bg-white shadow-sm">
            <div className="flex animate-pulse space-x-4">
              <div className="size-10 rounded-full bg-gray-200 shrink-0"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                  </div>
                  <div className="h-2 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Input Container with integrated send button */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask me here" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:border-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all"
          />
          <button 
            type="button" 
            onClick={handleSubmit}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-rose-600 transition-colors"
          >
            {sendButton}
          </button>
        </div>
      </div>
    </main>
  )
}