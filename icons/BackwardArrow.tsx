import * as React from "react";

export const BackwardArrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#bwa-prefix__clip0)">
        <path
          d="M15.422 16.594L14.016 18l-6-6 6-6 1.406 1.406L10.828 12l4.594 4.594z"
          fill="#7E7E83"
        />
      </g>
      <defs>
        <clipPath id="bwa-prefix__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
