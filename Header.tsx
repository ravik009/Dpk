
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        AI Image Studio
      </h1>
      <p className="mt-3 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
        Craft stunning visuals from your words. Select a style, type your prompt, and let AI bring your ideas to life.
      </p>
    </header>
  );
};
    