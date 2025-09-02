import * as React from "react";

export const Google = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <g
        clipPath="url(#gg-prefix__clip0)"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path
          d="M17.905 9.205c0-.639-.057-1.252-.163-1.841H9.265v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.909c1.702-1.567 2.683-3.874 2.683-6.615z"
          fill="#4285F4"
        />
        <path
          d="M9.265 18c2.43 0 4.468-.806 5.957-2.18l-2.909-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.035-3.711H1.223v2.332A8.997 8.997 0 009.265 18z"
          fill="#34A853"
        />
        <path
          d="M4.23 10.71A5.41 5.41 0 013.947 9c0-.593.103-1.17.283-1.71V4.958H1.223A8.996 8.996 0 00.265 9c0 1.452.348 2.827.958 4.042L4.23 10.71z"
          fill="#FBBC05"
        />
        <path
          d="M9.265 3.58c1.322 0 2.508.454 3.44 1.345l2.582-2.58C13.73.891 11.691 0 9.265 0a8.997 8.997 0 00-8.042 4.958L4.23 7.29c.707-2.127 2.691-3.71 5.035-3.71z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="gg-prefix__clip0">
          <path fill="#fff" transform="translate(.265)" d="M0 0h18.041v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
