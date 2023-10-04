/* eslint-disable no-unused-vars */
import Image from 'next/image';
import type { FC } from 'react';

export enum LOGO_COLOUR {
  Blue = 'blue',
  White = 'white',
}

const Logo: FC<{ colour: LOGO_COLOUR; size: number }> = ({ size, colour }) => (
  <Image
    alt={'couple'}
    height={size}
    src={`/images/logo-${colour}.png`}
    width={size}
  />
);

export default Logo;
