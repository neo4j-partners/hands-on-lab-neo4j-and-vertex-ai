"use client";

import { useChat } from "ai/react";
import React from "react";
import { useState } from 'react'; // Import useState
import { Switch } from '@mui/material'; // Import the Switch component from Material-UI
import Textarea from 'react-textarea-autosize';


export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api",
  });

  const [groundLLM, setGroundLLM] = useState(false);

  const handleGroundLLM = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroundLLM(event.target.checked);
  };

  return (
      <div className="min-h-screen bg-neutral-800">
        {messages.length !== 0 ? (
            <div className="pb-32 pt-5 space-y-5 w-[75%] mx-auto relative">
              {messages.map((message) => (
                  <div key={message.id} className="w-full bg-white">
                    {message.role === "user" ? (<div>{message.content}</div>) : (<div>{message.content}</div>)}
                  </div>
              ))}
            </div>
        ) : (
            <div className="w-full flex flex-col justify-center items-center pt-32 bg-neutral-500">
              <h1 className="font-bold text-3xl justify-center">Enter your prompt below</h1>
              <div className="mt-4 flex justify-end w-full pr-4"> {/* Use flex and justify-end to place the toggle and icon to the right */}
                <img src="/neo4j-icon-color.png" alt="Neo4j Icon" className="w-10 h-10 mr-2" /> {/* Add the image here */}
                <Switch
                    checked={groundLLM}
                    onChange={handleGroundLLM}
                    color={groundLLM ? 'primary' : 'error'}
                />
              </div>
            </div>
        )}

        <form onSubmit={handleSubmit} className="p-5 mx-auto fixed bottom-0 left-0 right-0 w-[50%] bg-neutral-500">
          <div className="relative flex items-center">
            <Textarea
                tableIndex={0}
                required
                rows={1}
                value={input}
                onChange={handleInputChange}
                autoFocus
                placeholder="send prompt..."
                spellCheck={false}
                className="w-full focus:outline-none shadow-teal-700 shadow-xl placeholder:text-gray-200 text-sm text-white p-5 pr-16 rounded-xl bg-neutral-600"
            />
            <button type="submit" className="absolute bg-teal-500 pt-1 rounded-lg right-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 25 25" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-amber-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
  );
};
