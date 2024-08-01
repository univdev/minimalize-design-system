import { ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode } from "react";

type ButtonElementType = 'button' | 'a';

type ButtonProps<Element extends ButtonElementType> = { as?: Element; children?: ReactNode } & ComponentPropsWithoutRef<ElementType>;

export function Button<Element extends ButtonElementType = 'button'>({ as, children, ...props }: ButtonProps<Element>): ReactElement {
  const Wrapper = as ?? 'button';

  return (
    <Wrapper { ...props }>
      { children }
    </Wrapper>
  );
}