import { clsx } from "clsx";
import { ComponentPropsWithRef } from "react";

export type InputProps = {} & ComponentPropsWithRef<'input'>;

export function Input({ className, value, type = 'text', onChange, ...props }: InputProps) {
  return (
    <input
      className={clsx('Input', className)}
      type={type}
      onChange={onChange}
      { ...props }
    />
  );
}