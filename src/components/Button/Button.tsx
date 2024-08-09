/**
 * A reusable button component.
 *
 * @param {ButtonProps} props - The properties for the button component.
 * @param {ReactNode} props.children - The content to be rendered inside the button.
 * @param {string} props.className - Additional CSS class names for the button.
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props.props - Standard HTML button attributes.
 * @return {JSX.Element} The button element.
 */

import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import s from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={clsx(s.wrapper, className)}>
      {children}
    </button>
  );
};
