import React from "react";

export const CloudOffIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M19.35 10.04A7.49 7.49 0 005.1 8.29 5.994 5.994 0 006 19h13a5 5 0 00.35-8.96z" fill={props.htmlColor || "#888"} />
      <line x1="1" y1="1" x2="23" y2="23" stroke="#fff" strokeWidth="2" />
    </svg>
  );
};

export default CloudOffIcon;