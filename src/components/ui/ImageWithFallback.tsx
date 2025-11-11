"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  [key: string]: any;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
};

export default ImageWithFallback;
