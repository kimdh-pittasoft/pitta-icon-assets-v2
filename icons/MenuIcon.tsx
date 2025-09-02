import React from "react";

export const MenuIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="6" width="16" height="2" fill={props.htmlColor || "#888"} />
    <rect x="4" y="11" width="16" height="2" fill={props.htmlColor || "#888"} />
    <rect x="4" y="16" width="16" height="2" fill={props.htmlColor || "#888"} />
  </svg>
);
