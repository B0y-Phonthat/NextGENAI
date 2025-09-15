import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
"use client";
import { useState } from "react";
import { FaFeatherAlt, FaMicrophone, FaQrcode } from 'react-icons/fa';
import { MdAdjust, MdNfc } from 'react-icons/md';
import { PiOption } from 'react-icons/pi';

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputMode, setInputMode] = useState("text"); // text, voice, qr, nfc
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputValue.trim() === "") return;
    
    setIsProcessing(true);
    
    // Add user message
    const userMessage = {
      role: "user",
      content: inputValue,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate RAG processing
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content: `Processing: ${inputValue}`,
        confidence: 0.85,
        sources: ["Document A", "Knowledge Base"],
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 1000);
    
    setInputValue("");
  };
  
  const handleQuickAction = (action) => {
    // Quick response templates
    const quickResponses = {
      greeting: "สวัสดีครับ ต้องการความช่วยเหลืออะไร?",
      help: "ช่วยอธิบายวิธีใช้งาน",
      status: "ตรวจสอบสถานะ"
    };
    setInputValue(quickResponses[action] || "");
  };
  
  return(
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with Context Indicator */}
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            RAG Assistant MVP
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI-Powered Support System
          </p>
        </div>
      </header>
      
      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-4">
        {/* Quick Actions */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Quick Actions
          </h3>
          <div className="flex gap-2 flex-wrap">
            <button 
              onClick={() => handleQuickAction('greeting')}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
            >
              ทักทาย
            </button>
            <button 
              onClick={() => handleQuickAction('help')}
              className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
            >
              ขอความช่วยเหลือ
            </button>
            <button 
              onClick={() => handleQuickAction('status')}
              className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
            >
              เช็คสถานะ
            </button>
          </div>
        </div>
        
        {/* Messages Display */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4 h-96 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
              <p>เริ่มต้นการสนทนาโดยพิมพ์ข้อความด้านล่าง</p>
              <p className="text-sm mt-2">รองรับ: Text, Voice, QR Code, NFC</p>
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-blue-100 dark:bg-blue-900 ml-auto max-w-xs' 
                      : 'bg-gray-100 dark:bg-gray-700 mr-auto max-w-md'
                  }`}
                >
                  <p className="text-sm text-gray-900 dark:text-white">
                    {msg.content}
                  </p>
                  {msg.role === 'assistant' && (
                    <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                      <p>Confidence: {(msg.confidence * 100).toFixed(0)}%</p>
                      <p>Sources: {msg.sources?.join(', ')}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Input Area with Multiple Modes */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
          {/* Input Mode Selector */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => setInputMode('text')}
              className={`p-2 rounded ${inputMode === 'text' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              title="Text Input"
            >
              <PiOption />
            </button>
            <button
              onClick={() => setInputMode('voice')}
              className={`p-2 rounded ${inputMode === 'voice' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              title="Voice Input"
            >
              <FaMicrophone />
            </button>
            <button
              onClick={() => setInputMode('qr')}
              className={`p-2 rounded ${inputMode === 'qr' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              title="QR Code"
            >
              <FaQrcode />
            </button>
            <button
              onClick={() => setInputMode('nfc')}
              className={`p-2 rounded ${inputMode === 'nfc' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              title="NFC"
            >
              <MdNfc />
            </button>
          </div>
          
          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Enter message (Mode: ${inputMode})`}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              disabled={isProcessing}
            />
            <button 
              type="submit"
              disabled={isProcessing}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {isProcessing ? (
                <>
                  <MdAdjust className="animate-spin" />
                  Processing
                </>
              ) : (
                <>
                  <FaFeatherAlt />
                  Send
                </>
              )}
            </button>
          </form>
          
          {/* Context Indicator */}
          <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            <p>Context: {messages.length} messages • Mode: {inputMode.toUpperCase()}</p>
          </div>
        </div>
      </main>
    </div>
  );
}