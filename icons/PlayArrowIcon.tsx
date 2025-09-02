import React from "react";

export const PlayArrowIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" {...props}>
    <circle cx="16" cy="16" r="16" fill={props.htmlColor || "#000"} fillOpacity="0.4" />
    <polygon points="12,10 23,16 12,22" fill={props.htmlColor || "#fff"} />
  </svg>
);
