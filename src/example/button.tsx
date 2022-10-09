import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<ButtonProps> = props => <button {...props} />;

export { Button };

export type { ButtonProps };
