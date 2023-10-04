import React from 'react';
import styles from './button.module.scss';
import type { FC } from 'react';
import { joinClasses } from '@/helpers/css  ';

const colors = {
  primary: '#87ceeb',
  secondary: '#c0c0c0',
  light: '#f7f7f7',
};

interface Props {
  children: React.ReactNode;
  type: string;
  bgColor?: keyof typeof colors;
  label?: string;
  textColor?: keyof typeof colors;
}
const Button: FC<Props> = ({
  children,
  label,
  bgColor = 'primary',
  textColor = 'secondary',
  type,
}) => (
  <button
    className={joinClasses(['btn', styles.button])}
    style={{
      backgroundColor: colors[bgColor],
      color: textColor,
      borderRadius: type === 'rounded' ? '23px' : '',
    }}
  >
    {label ?? children}
  </button>
);

export default Button;
