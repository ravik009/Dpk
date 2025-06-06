
import React from 'react';
import type { ImageSizeOption } from '../types';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  selectedSizeName: string;
  setSelectedSizeName: (sizeName: string) => void;
  imageSizes: ImageSizeOption[];
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({
  prompt,
  setPrompt,
  selectedSizeName,
  setSelectedSizeName,
  imageSizes,
  onSubmit,
  isLoading,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-slate-300 mb-1">
          Enter your image prompt
        </label>
        <textarea
          id="prompt"
          name="prompt"
          rows={4}
          className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-slate-400 text-slate-100 transition-colors duration-150"
          placeholder="e.g., A futuristic cityscape at sunset, synthwave style"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div>
        <label htmlFor="size" className="block text-sm font-medium text-slate-300 mb-1">
          Image Style/Aspect Ratio
        </label>
        <select
          id="size"
          name="size"
          className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-slate-100 transition-colors duration-150"
          value={selectedSizeName}
          onChange={(e) => setSelectedSizeName(e.target.value)}
          disabled={isLoading}
        >
          {imageSizes.map((size) => (
            <option key={size.name} value={size.name}>
              {size.name} {size.width && size.height ? `(${size.width}x${size.height})` : ''}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-slate-400">
            This helps guide the AI. Actual dimensions may vary based on the model.
        </p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 group"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Generate Image
          </>
        )}
      </button>
    </form>
  );
};

// SVG Icon for the button (Heroicons)
const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 13.75a4.5 4.5 0 00-3.09 3.09L12 18.75l.813-2.846a4.5 4.5 0 003.09-3.09L17 10.25l2.846-.813a4.5 4.5 0 003.09-3.09L21 2.25l-.813 2.846a4.5 4.5 0 00-3.09 3.09L14.25 9l2.846.813a4.5 4.5 0 003.09 3.09L21 15.75l-1.09.625M18 18v2.25a2.25 2.25 0 002.25 2.25H21a2.25 2.25 0 002.25-2.25V18m0 0a2.25 2.25 0 00-2.25-2.25H18.75a2.25 2.25 0 00-2.25 2.25m0 0A2.25 2.25 0 0118 15.75V18" />
    </svg>
);
    