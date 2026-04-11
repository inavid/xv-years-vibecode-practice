import React from 'react';
import TopFrameCSS from './TopFrameCSS';
import TopFrameImage from './TopFrameImage';

interface CardFrameProps {
  variant?: 'css' | 'image';
  heightClass?: string;
}

export default function CardFrame({ variant = 'image', heightClass = 'h-[10%]' }: CardFrameProps) {
  return (
    <>
      {variant === 'css' && <TopFrameCSS />}
      {variant === 'image' && <TopFrameImage heightClass={heightClass} />}
    </>
  );
}
