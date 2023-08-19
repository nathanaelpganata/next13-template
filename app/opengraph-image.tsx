/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function opengraphImage() {
  return new ImageResponse(
    (
      <div className='relative' style={{ display: 'flex' }}>
        <img alt='Next13-Template' src={'https://i.imgur.com/KHaQorn.png'} />
      </div>
    ),
    size
  );
}
