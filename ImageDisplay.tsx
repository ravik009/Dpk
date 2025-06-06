
import React from 'react';
import type { GeneratedImageData } from '../types';

interface ImageDisplayProps {
  imageData: GeneratedImageData;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageData }) => {
  const imageUrl = `data:${imageData.mimeType};base64,${imageData.base64}`;

  return (
    <div className="mt-8 p-4 bg-slate-700 bg-opacity-50 rounded-lg shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-4 text-purple-300">Your AI Masterpiece:</h3>
      <div className="flex justify-center items-center mb-4 bg-black rounded overflow-hidden">
        <img
          src={imageUrl}
          alt={imageData.originalPrompt || 'Generated AI image'}
          className="max-w-full max-h-[60vh] object-contain rounded shadow-lg"
        />
      </div>
      <div className="text-center">
        <a
          href={imageUrl}
          download={`ai_image_${Date.now()}.${imageData.mimeType.split('/')[1] || 'png'}`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-green-500 transition-colors"
        >
          <DownloadIcon className="w-5 h-5 mr-2" />
          Download Image
        </a>
      </div>
      <p className="mt-3 text-xs text-slate-400 text-center italic">
        Prompt used: "{imageData.originalPrompt}"
      </p>
    </div>
  );
};

// SVG Icon for download button (Heroicons)
const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);
    