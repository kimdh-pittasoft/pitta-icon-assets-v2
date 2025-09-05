import React from 'react';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  htmlColor?: string;
}

export const makeSvgIcon = (SvgComponent: any) => {
  return React.forwardRef<SVGSVGElement, SvgIconProps>(
    ({ size = 24, htmlColor, ...props }, ref) => {
      return (
        <SvgComponent
          ref={ref}
          width={size}
          height={size}
          fill={htmlColor || 'currentColor'}
          {...props}
        />
      );
    }
  );
};
