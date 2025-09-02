import * as React from "react";

export const ForwardArrow = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#fwa-prefix__clip0)">
        <path
          d="M8.578 16.594L13.172 12 8.578 7.406 9.984 6l6 6-6 6-1.406-1.406z"
          fill={props.htmlColor || "#7E7E83"}
        />
      </g>
      <defs>
        <clipPath id="fwa-prefix__clip0">
          <path fill={props.htmlColor || "#fff"}   d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
