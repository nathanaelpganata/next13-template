import { ImageResponse } from 'next/server';

export const size = {
  width: 20,
  height: 20,
};

export const contentType = 'image/png';

export default function icon() {
  return new ImageResponse(<div className='flex flex-wrap'>13</div>, size);
}
