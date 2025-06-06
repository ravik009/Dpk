
import type { ImageSizeOption } from './types';

export const IMAGE_GENERATION_MODEL = 'imagen-3.0-generate-002';

export const IMAGE_SIZES: ImageSizeOption[] = [
  { name: "Instagram Post (Square)", width: 1080, height: 1080, promptSuffix: "square image, 1:1 aspect ratio" },
  { name: "Instagram Story (Portrait)", width: 1080, height: 1920, promptSuffix: "tall image, 9:16 aspect ratio" },
  { name: "YouTube Thumbnail (Landscape)", width: 1280, height: 720, promptSuffix: "wide image, 16:9 aspect ratio, suitable for a thumbnail" },
  { name: "Facebook Post (Landscape)", width: 1200, height: 630, promptSuffix: "landscape image, approximately 1.91:1 aspect ratio" },
  { name: "Twitter/X Post (Square)", width: 1080, height: 1080, promptSuffix: "square image, 1:1 aspect ratio" },
  { name: "LinkedIn Post (Landscape)", width: 1200, height: 627, promptSuffix: "professional landscape image, for a business post" },
  { name: "Pinterest Pin (Tall)", width: 1000, height: 1500, promptSuffix: "vertical image, 2:3 aspect ratio, visually appealing" },
  { name: "General Purpose (Default)", promptSuffix: "" },
];

export const DEFAULT_IMAGE_SIZE_NAME = "General Purpose (Default)";
    