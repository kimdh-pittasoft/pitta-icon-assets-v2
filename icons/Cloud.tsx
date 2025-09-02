import * as React from "react";

export const Cloud = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  const { htmlColor = "#888", ...svgProps } = props; // 기본 색상 및 나머지 props 전달
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...svgProps}>
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill={htmlColor}></path>
    </svg>
  );
};
