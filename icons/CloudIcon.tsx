import React from "react";

export const CloudIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19.35 10.04A7.49 7.49 0 005.1 8.29 5.994 5.994 0 006 19h13a5 5 0 00.35-8.96z" fill={props.htmlColor || "#888"} />
  </svg>
);

export default CloudIcon;
