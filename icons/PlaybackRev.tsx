import * as React from "react";

export const PlaybackRevIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg height="32" width="32" {...props} viewBox="0 0 33 32">
      <g clipPath="url(#clip0_1352_69259)">
        <path
          d="M9.4207 19.1491C10.0373 23.8376 14.334 27.1389 19.0225 26.5287C23.7111 25.9122 27.0123 21.6154 26.4021 16.9269C25.8241 12.4953 21.9513 9.30323 17.5774 9.48306H10.185"
          stroke={props.htmlColor || "#2EA8E5"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M12.0927 6.3999L8.875 9.62406L12.0927 12.8482"
          stroke={props.htmlColor || "#2EA8E5"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M20.8115 17.0499L16.3542 14.4822C15.7485 14.1386 14.998 14.5726 14.998 15.2688V20.4132C14.998 21.1094 15.7485 21.5433 16.3542 21.1998L20.8115 18.6321C21.4173 18.2885 21.4173 17.4115 20.8115 17.068V17.0499Z"
          fill="#D81A26"
        />
      </g>
      <defs>
        <clipPath id="clip0_1352_69259">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.875)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
