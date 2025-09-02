import * as React from "react";

export const ThumbnailPlayback = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 94 64"
      fill="none"
      preserveAspectRatio="none"
    >
      <rect
        x="0.5"
        y="0.5"
        width="93"
        height="63"
        fill="white"
        stroke={props.htmlColor || "#D0EBF9"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.1867 18.8C58.8133 17.7091 57.8 17 56.6 17H37.4267C36.2 17 35.2133 17.7091 34.8133 18.8L32.5775 25.3721H30.3333C29.597 25.3721 29 25.9968 29 26.7674V27.4651C29 28.2357 29.597 28.8605 30.3333 28.8605H30.7867L29.6667 30.0091V44.907C29.6667 45.9433 30.52 47 31.5333 47H33.1867C34.2 47 35 45.9636 35 44.9273V41.4186H59V44.9273C59 45.9636 59.8267 47 60.84 47H62.4667C63.48 47 64.3333 45.9433 64.3333 44.907V30.0091L63.2133 28.8605H63.6667C64.403 28.8605 65 28.2357 65 27.4651V26.7674C65 25.9968 64.403 25.3721 63.6667 25.3721H61.4225L59.1867 18.8ZM37.4267 19.7273H56.6L59.3467 27.9091H34.68L37.4267 19.7273ZM36.3333 36.0909C34.8667 36.0909 33.6667 34.8636 33.6667 33.3636C33.6667 31.8636 34.8667 30.6364 36.3333 30.6364C37.8 30.6364 39 31.8636 39 33.3636C39 34.8636 37.8 36.0909 36.3333 36.0909ZM57.6667 36.0909C56.2 36.0909 55 34.8636 55 33.3636C55 31.8636 56.2 30.6364 57.6667 30.6364C59.1333 30.6364 60.3333 31.8636 60.3333 33.3636C60.3333 34.8636 59.1333 36.0909 57.6667 36.0909Z"
        fill={props.htmlColor || "#D0EBF9"}
      />
      <path
        d="M25.7263 46L0.989502 63"
        stroke={props.htmlColor || "#D0EBF9"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M68.2737 46L93.0105 63"
        stroke={props.htmlColor || "#D0EBF9"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
