import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";

export type ListType = 'ol' | 'ul';

export type ListProps<T, Element extends ListType> = {
  type?: ListType;
  iteration: T[];
  children?: (item: T, index: number) => ReactNode;
} & ComponentPropsWithoutRef<Element>;

export function List<T, Element extends ListType = 'ul'>({ type = 'ul', iteration = [], children, ...props }: ListProps<T, Element>): ReactElement {
  const Wrapper = type;

  return (
    <Wrapper { ...props }>
      { iteration.map((item, index) => (<li key={index}>{ children?.(item, index) }</li>)) }
    </Wrapper>
  );
}