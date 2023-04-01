import { ImageLoaderProps } from "next/image";

export const cloudflareLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `https://getimg.ai/cdn-cgi/image/${paramsString}/${src}`;
};
