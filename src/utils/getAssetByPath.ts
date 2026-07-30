import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{avif,gif,jpeg,jpg,png,svg,webp}',
  { eager: true }
);

export function getAssetByPath(path: string): ImageMetadata {
  const key = `/src/assets/${path.replace(/^\/+/, '')}`;
  const asset = images[key]?.default;

  if (!asset) {
    throw new Error(`Asset not found: ${path}`);
  }

  return asset;
}
