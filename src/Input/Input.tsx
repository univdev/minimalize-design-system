import { ComponentPropsWithRef } from "react";

export type InputProps = {} & ComponentPropsWithRef<'input'>;

export function Input({ value, type = 'text', onChange, ...props }: InputProps) {
  return (
    <input
      type={type}
      onChange={onChange}
      { ...props }
    />
  );
}