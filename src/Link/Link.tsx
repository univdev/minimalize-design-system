import { css } from "@emotion/css";
import { clsx } from "clsx";
import { ComponentProps, CSSProperties, FC, ReactElement } from "react";

export type LinkComponentProps = ComponentProps<'a'>;

export type LinkProps = {
  LinkComponent?: FC<LinkComponentProps>;
  textDecoration?: CSSProperties['textDecoration'];
} & LinkComponentProps;

export function Link({
  LinkComponent,
  className,
  style,
  href,
  children,
  textDecoration,
  ...props
}: LinkProps): ReactElement {
  const Wrapper = LinkComponent ?? 'a';

  const styledComponentClass = css`
    text-decoration: ${textDecoration};
  `;

  return (
    <Wrapper
      className={clsx('Link', className, styledComponentClass)}
      href={href}
      {...props}
    >
      { children }
    </Wrapper>
  );
}
