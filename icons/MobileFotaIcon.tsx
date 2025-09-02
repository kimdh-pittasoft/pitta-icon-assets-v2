import * as React from "react";

export const MobileFotaIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
<svg width="1em" height="1em" viewBox="0 0 56 56" fill={props.htmlColor || "#888"} xmlns="http://www.w3.org/2000/svg" {...props}>

  <path d="M34.64,51.24h-13.28c-4.88,0-8.85-3.97-8.85-8.85V13.62c0-4.88,3.97-8.85,8.85-8.85h13.28c4.88,0,8.85,3.97,8.85,8.85v28.77c0,4.88-3.97,8.85-8.85,8.85ZM21.36,9.19c-2.44,0-4.43,1.99-4.43,4.43v28.77c0,2.44,1.99,4.43,4.43,4.43h13.28c2.44,0,4.43-1.99,4.43-4.43V13.62c0-2.44-1.99-4.43-4.43-4.43h-13.28Z" />
  <path d="M30.21,15.83h-4.43c-1.22,0-2.21-.99-2.21-2.21s.99-2.21,2.21-2.21h4.43c1.22,0,2.21.99,2.21,2.21s-.99,2.21-2.21,2.21Z" />
</svg>
  );
};
