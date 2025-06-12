'use client';

import Image from 'next/image';

interface ImageProps extends Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'> {
  src: string;
  alt: string;
}

export function CustomImage({ src, alt, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      {...props}
    />
  );
}

export { CustomImage as Image };
