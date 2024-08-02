import { ComponentStyle } from "../types/common";

export function compareProperties<P extends { [key: string]: any }>(original: P, other: P): boolean {
  const originalProperties = Object.entries(original);

  for (const [key, value] of originalProperties){
    if (other[key] !== value) return false;
  }

  return true;
}

export function getStylesFromVariants<P>(properties: P, styles?: ComponentStyle<P>) {
  let result = {};

  if (typeof styles === 'undefined') return [];
  
  styles.variants
    .filter(({ props }) => compareProperties(props(), properties))
    .forEach(({ style }) => {
      result = { ...result, ...style };
    });

  return result;
}

export function convertNumberToCSS(value?: number | string, unit: string = 'px') {
  if (typeof value === 'undefined') return undefined;
  else if (typeof value === 'number') return `${value}${unit}`;
  return value;
}