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
  const [lst_Message, setLst_Message] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(inputValue === "") return alert("Please enter a value");
    const userMessage = {role: "user", content: inputValue};
    setLst_Message((currentMessage) => [...currentMessage, userMessage]);

    const currentInput = inputValue;
    
    setInputValue("");
    try {
      const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: currentInput }),
    });
    
    const data = await response.json();

    const assistantMessage = {role: "assistant", content: data.message};
    setLst_Message((currentMessage) => [...currentMessage, assistantMessage]);

    } catch (error) {
      console.error("Error:", error);
    }
    // console.log(inputValue);
    // console.log(lst_Message)
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
          {/* User Message */}
          {lst_Message.map((message, index) => {
            const isUser = message.role === 'user';
            return (
              <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs rounded-lg p-3 ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  <p>{message.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Input Container with integrated send button */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask me here" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:border-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all text-black"
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