
export interface ImageSizeOption {
  name: string;
  width?: number; // Optional, as API might not use it directly
  height?: number; // Optional
  promptSuffix: string; // To guide the AI
}

export interface GeneratedImageData {
  base64: string;
  mimeType: string;
  originalPrompt: string; // The prompt used for generation including suffix
}
    