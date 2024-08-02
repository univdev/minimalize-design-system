import { CSSProperties } from "react";

/**
 * Refer: https://github.com/mui/material-ui/blob/0ed7c11eab4dc64271b6f63e6577301c38b32d63/packages/mui-types/index.d.ts#L65
 */
export type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key :never;
  }[keyof T],
  string
>;

export interface ComponentStyle<P> {
  variants: ComponentStyleVariants<P>[];
};

export interface ComponentStyleVariants<P> {
  props: () => Partial<P>;
  style: CSSProperties;
}