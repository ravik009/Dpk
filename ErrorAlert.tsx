
import React from 'react';

interface ErrorAlertProps {
  message: string;
  onClose: () => void;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="my-6 p-4 bg-red-700 bg-opacity-80 border border-red-500 text-red-100 rounded-lg shadow-md flex justify-between items-center transition-opacity duration-300" role="alert">
      <div className="flex items-center">
        <ErrorIcon className="h-6 w-6 mr-3 text-red-200" />
        <span className="text-sm">{message}</span>
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors"
        aria-label="Close error message"
      >
        <CloseIcon className="h-5 w-5 text-red-200" />
      </button>
    </div>
  );
};

// SVG Icons (Heroicons)
const ErrorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
    