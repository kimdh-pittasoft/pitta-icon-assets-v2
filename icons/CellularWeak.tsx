import * as React from "react";

export const CellularWeak = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill={props.htmlColor || "#888"} {...props}>
      <path d="M3 16H6V20H3V16Z" fill={props.htmlColor || "#888"} />
      <path d="M8 12H11V20H8V12Z" fill={props.htmlColor || "#888"} />
      <path d="M13 8H16V20H13V8Z" fill={props.htmlColor || "#888"} />
      <path d="M18 4H21V20H18V4Z" fill={props.htmlColor || "#888"} />
    </svg>
  );
};
