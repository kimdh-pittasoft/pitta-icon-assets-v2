import React from "react";

export const VideoIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0_449_2384)">
      <path
        d="M21.1668 7.8335L15.3335 12.0002L21.1668 16.1668V7.8335Z"
        stroke={props.htmlColor || "#68686E"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6668 6.1665H4.50016C3.57969 6.1665 2.8335 6.9127 2.8335 7.83317V16.1665C2.8335 17.087 3.57969 17.8332 4.50016 17.8332H13.6668C14.5873 17.8332 15.3335 17.087 15.3335 16.1665V7.83317C15.3335 6.9127 14.5873 6.1665 13.6668 6.1665Z"
        stroke={props.htmlColor || "#68686E"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_449_2384">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(2 2)"
        />
      </clipPath>
    </defs>
  </svg>
);
