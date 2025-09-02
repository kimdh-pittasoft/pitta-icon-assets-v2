import * as React from "react";

export const CloudOutline = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 64 64"
      fill={props.htmlColor || "none"}
      {...props}
    >
      <path d="M32 16c6.987 0 13.013 4.96 14.373 11.813l.8 4 4.08.294c4.16.266 7.414 3.76 7.414 7.893 0 4.4-3.6 8-8 8H16c-5.893 0-10.667-4.773-10.667-10.667 0-5.466 4.08-10.026 9.494-10.586l2.853-.294 1.333-2.533C21.547 19.04 26.507 16 32 16zm0-5.333c-7.707 0-14.4 4.373-17.733 10.773C6.24 22.293 0 29.093 0 37.333c0 8.827 7.173 16 16 16h34.667C58.027 53.333 64 47.36 64 40c0-7.04-5.467-12.747-12.4-13.227-1.813-9.2-9.893-16.106-19.6-16.106z" fill={props.htmlColor || "#000"} />
    </svg>
  );
};

export default CloudOutline;
