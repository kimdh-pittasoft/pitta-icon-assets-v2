import * as React from "react";

export const CloudCamera = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 65 64"
      fill="none"
      {...props}
    >
      <g clipPath="url(#cc-prefix__clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 13h15v5h34a5 5 0 015 5v18a5 5 0 01-5 5h-34v5h-15v-5h-5a5 5 0 01-5-5V23a5 5 0 015-5h5v-5zm0 10h-5v18h5V23zm15 18h34V23h-34v18zm-10-23h5v28h-5V18zm39 14a7 7 0 11-14 0 7 7 0 0114 0zm-3 0a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0zm-.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          fill="#0095E0"
        />
      </g>
      <defs>
        <clipPath id="cc-prefix__clip0">
          <path fill="#fff" transform="translate(.5)" d="M0 0h64v64H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
