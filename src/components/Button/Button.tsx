import React from 'react';
import s from './Button.module.scss';

import classNames from 'classnames/bind';
const cx = classNames.bind(s);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'white' | 'white-border' | 'card' | 'dark' | 'dark-border';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className }) => {
  return <button className={cx('button', `button--${variant}`, className)}>{children}</button>;
};
