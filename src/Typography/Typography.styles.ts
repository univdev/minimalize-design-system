import { ComponentStyle } from "../types/common";
import { TypographyElementType, TypographyProps } from "./Typography";

export const TYPOGRAPHY_DISPLAY_SEMIBOLD_64 = {
  fontSize: 64,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '70px',
} as const;

export const TYPOGRAPHY_LARGETITLE_SEMIBOLD_56 = {
  fontSize: 56,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '64px',
} as const;

export const TYPOGRAPHY_TITLE01_SEMIBOLD_44 = {
  fontSize: 44,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '52px',
} as const;

export const TYPOGRAPHY_TITLE02_SEMIBOLD_36 = {
  fontSize: 36,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '48px',
} as const;

export const TYPOGRAPHY_TITLE03_SEMIBOLD_32 = {
  fontSize: 32,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '44px',
} as const;

export const TYPOGRAPHY_SUBTITLE01_SEMIBOLD_24 = {
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '34px',
} as const;

export const TYPOGRAPHY_SUBTITLE01_MEDIUM_24 = {
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '34px',
} as const;

export const TYPOGRAPHY_SUBTITLE01_REGULAR_24 = {
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '34px',
} as const;

export const TYPOGRAPHY_SUBTITLE02_SEMIBOLD_20 = {
  fontSize: 20,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '28px',
} as const;

export const TYPOGRAPHY_SUBTITLE02_MEDIUM_20 = {
  fontSize: 20,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '28px',
} as const;

export const TYPOGRAPHY_SUBTITLE02_REGULAR_20 = {
  fontSize: 20,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '28px',
} as const;

export const TYPOGRAPHY_BODY01STRONG_SEMIBOLD_18 = {
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '26px',
} as const;

export const TYPOGRAPHY_BODY01STRONG_MEDIUM_18 = {
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '26px',
} as const;

export const TYPOGRAPHY_BODY01STRONG_REGULAR_18 = {
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '26px',
} as const;

export const TYPOGRAPHY_BODY02STRONG_SEMIBOLD_16 = {
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px',
} as const;

export const TYPOGRAPHY_BODY02STRONG_MEDIUM_16 = {
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '24px',
} as const;

export const TYPOGRAPHY_BODY02STRONG_REGULAR_16 = {
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px',
} as const;

export const TYPOGRAPHY_BODY01_REGULAR_18 = {
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '26px',
} as const;

export const TYPOGRAPHY_BODY02_REGULAR_16 = {
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px',
} as const;

export const TYPOGRAPHY_CAPTION01_SEMIBOLD_14 = {
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '21px',
} as const;

export const TYPOGRAPHY_CAPTION01_MEDIUM_14 = {
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '21px',
} as const;

export const TYPOGRAPHY_CAPTION01_REGULAR_14 = {
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '21px',
} as const;

export const TYPOGRAPHY_CAPTION02_SEMIBOLD_12 = {
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '18px',
} as const;

export const TYPOGRAPHY_CAPTION02_MEDIUM_12 = {
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '18px',
} as const;

export const TYPOGRAPHY_CAPTION02_REGULAR_12 = {
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '18px',
} as const;

export const TYPOGRAPHY_CAPTION03_SEMIBOLD_10 = {
  fontSize: 10,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '15px',
} as const;

export const TYPOGRAPHY_CAPTION03_MEDIUM_10 = {
  fontSize: 10,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '15px',
} as const;

export const TYPOGRAPHY_CAPTION03_REGULAR_10 = {
  fontSize: 10,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '15px',
} as const;

export const TypographyStyles: ComponentStyle<TypographyProps<TypographyElementType>> = {
  variants: [
    {
      props: () => ({ variant: 'display-semibold-64' }),
      style: TYPOGRAPHY_DISPLAY_SEMIBOLD_64,
    },
    {
      props: () => ({ variant: 'largetitle-semibold-56' }),
      style: TYPOGRAPHY_LARGETITLE_SEMIBOLD_56,
    },
    {
      props: () => ({ variant: 'title01-semibold-44' }),
      style: TYPOGRAPHY_TITLE01_SEMIBOLD_44,
    },
    {
      props: () => ({ variant: 'title02-semibold-36' }),
      style: TYPOGRAPHY_TITLE02_SEMIBOLD_36,
    },
    {
      props: () => ({ variant: 'title03-semibold-32' }),
      style: TYPOGRAPHY_TITLE03_SEMIBOLD_32,
    },
    {
      props: () => ({ variant: 'subtitle01-semibold-24' }),
      style: TYPOGRAPHY_SUBTITLE01_SEMIBOLD_24,
    },
    {
      props: () => ({ variant: 'subtitle01-medium-24' }),
      style: TYPOGRAPHY_SUBTITLE01_MEDIUM_24,
    },
    {
      props: () => ({ variant: 'subtitle01-regular-24' }),
      style: TYPOGRAPHY_SUBTITLE01_REGULAR_24,
    },
    {
      props: () => ({ variant: 'subtitle02-semibold-20' }),
      style: TYPOGRAPHY_SUBTITLE02_SEMIBOLD_20,
    },
    {
      props: () => ({ variant: 'subtitle02-medium-20' }),
      style: TYPOGRAPHY_SUBTITLE02_MEDIUM_20,
    },
    {
      props: () => ({ variant: 'subtitle02-regular-20' }),
      style: TYPOGRAPHY_SUBTITLE02_REGULAR_20,
    },
    {
      props: () => ({ variant: 'body01-regular-18' }),
      style: TYPOGRAPHY_BODY01_REGULAR_18,
    },
    {
      props: () => ({ variant: 'body02-regular-16' }),
      style: TYPOGRAPHY_BODY02_REGULAR_16,
    },
    {
      props: () => ({ variant: 'caption01-semibold-14' }),
      style: TYPOGRAPHY_CAPTION01_SEMIBOLD_14,
    },
    {
      props: () => ({ variant: 'caption01-medium-14' }),
      style: TYPOGRAPHY_CAPTION01_MEDIUM_14,
    },
    {
      props: () => ({ variant: 'caption01-regular-14' }),
      style: TYPOGRAPHY_CAPTION01_REGULAR_14,
    },
    {
      props: () => ({ variant: 'caption02-semibold-12' }),
      style: TYPOGRAPHY_CAPTION02_SEMIBOLD_12,
    },
    {
      props: () => ({ variant: 'caption02-medium-12' }),
      style: TYPOGRAPHY_CAPTION02_MEDIUM_12,
    },
    {
      props: () => ({ variant: 'caption02-regular-12' }),
      style: TYPOGRAPHY_CAPTION02_REGULAR_12,
    },
    {
      props: () => ({ variant: 'caption03-semibold-10' }),
      style: TYPOGRAPHY_CAPTION03_SEMIBOLD_10,
    },
    {
      props: () => ({ variant: 'caption03-medium-10' }),
      style: TYPOGRAPHY_CAPTION03_MEDIUM_10,
    },
    {
      props: () => ({ variant: 'caption03-regular-10' }),
      style: TYPOGRAPHY_CAPTION03_REGULAR_10,
    },    
  ],
};