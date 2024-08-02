import { ComponentStyle } from "../types/common";
import { ButtonElementType, ButtonProps } from "./Button";

export const ButtonStyles: ComponentStyle<ButtonProps<ButtonElementType>> = {
  variants: [
    {
      props: () => ({ size: 'small' }),
      style: {
        height: 36,
        padding: '6px 12px',
      },
    },
    {
      props: () => ({ size: 'medium' }),
      style: {
        height: 40,
        padding: '8px 12px',
      },
    },
    {
      props: () => ({ size: 'large' }),
      style: {
        height: 48,
        padding: 16,
      },
    },
    {
      props: () => ({ variants: 'contained' }),
      style: {
        
      },
    },
    {
      props: () => ({ shape: 'circle' }),
      style: {
        borderRadius: '50%',
      },
    },
    {
      props: () => ({ shape: 'round' }),
      style: {
        borderRadius: '8px',
      },
    },
    {
      props: () => ({ shape: 'square' }),
      style: {
        borderRadius: 0,
      },
    }
  ],
}