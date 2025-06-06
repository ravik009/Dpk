
import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-10" aria-label="Loading image">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-300">
          <PaintBrushIcon className="w-8 h-8 animate-pulse" />
        </div>
      </div>
      <p className="ml-4 text-lg text-slate-300">Generating your image...</p>
    </div>
  );
};

// SVG Icon (Heroicons - outline)
const PaintBrushIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a15.995 15.995 0 00-4.764 4.648l-3.876 5.814a1.151 1.151 0 001.597 1.597l5.814-3.876a15.996 15.996 0 004.649-4.763m-3.421-3.42a15.998 15.998 0 00-3.388 1.62m5.043.025a15.994 15.994 0 01-1.622 3.39" />
  </svg>
);
    