import React from "react";

export const WifiConnectedIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.1667 6.5835L19.5 9.0835M19.5 9.0835L16.1667 11.5835M19.5 9.0835H9.5"
      stroke={props.htmlColor || "#68686E"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.83333 17.417L4.5 14.917M4.5 14.917L7.83333 12.417M4.5 14.917H14.5"
      stroke={props.htmlColor || "#68686E"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
