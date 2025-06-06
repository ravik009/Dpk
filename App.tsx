
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptForm } from './components/PromptForm';
import { ImageDisplay } from './components/ImageDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorAlert } from './components/ErrorAlert';
import { generateImageFromPrompt } from './services/geminiService';
import type { ImageSizeOption, GeneratedImageData } from './types';
import { IMAGE_SIZES, DEFAULT_IMAGE_SIZE_NAME } from './constants';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [selectedSizeName, setSelectedSizeName] = useState<string>(DEFAULT_IMAGE_SIZE_NAME);
  const [generatedImage, setGeneratedImage] = useState<GeneratedImageData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }
    if (!process.env.API_KEY) {
      setError('API Key is not configured. Please set the API_KEY environment variable.');
      console.error('API Key is missing.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    const selectedSize = IMAGE_SIZES.find(size => size.name === selectedSizeName);
    const fullPrompt = selectedSize ? `${prompt.trim()} ${selectedSize.promptSuffix}`.trim() : prompt.trim();

    try {
      const imageData = await generateImageFromPrompt(fullPrompt);
      setGeneratedImage(imageData);
    } catch (err) {
      console.error('Image generation failed:', err);
      if (err instanceof Error) {
        setError(`Failed to generate image: ${err.message}. Check console for details.`);
      } else {
        setError('An unknown error occurred during image generation.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [prompt, selectedSizeName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100 flex flex-col items-center p-4 sm:p-6 md:p-8 selection:bg-purple-500 selection:text-white">
      <Header />
      <main className="container mx-auto mt-8 w-full max-w-3xl bg-slate-800 bg-opacity-50 backdrop-blur-md shadow-2xl rounded-xl p-6 md:p-10">
        <PromptForm
          prompt={prompt}
          setPrompt={setPrompt}
          selectedSizeName={selectedSizeName}
          setSelectedSizeName={setSelectedSizeName}
          imageSizes={IMAGE_SIZES}
          onSubmit={handleGenerateImage}
          isLoading={isLoading}
        />

        {isLoading && <LoadingSpinner />}
        {error && <ErrorAlert message={error} onClose={() => setError(null)} />}
        
        {generatedImage && !isLoading && !error && (
          <ImageDisplay imageData={generatedImage} />
        )}

        {!generatedImage && !isLoading && !error && (
           <div className="mt-8 text-center text-slate-400">
            <p>Enter a prompt and choose a size to generate an image.</p>
            <p>The AI will create an image based on your description.</p>
          </div>
        )}
      </main>
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Image Studio. Powered by Gemini.</p>
      </footer>
    </div>
  );
};

export default App;
    