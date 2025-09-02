import * as React from "react";

export const ThumbnailBroken = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 80 80"
      fill="none"
      preserveAspectRatio="none"
    >
      <rect x="0.5" y="0.5" width="79" height="79" fill="#E9E9EA" />
      <g clipPath="url(#thm-broken-clip0)">
        <path
          d="M49 39.1562L53.5 43.6562V50.4766C53.5 51.2734 53.1953 51.9766 52.5859 52.5859C51.9766 53.1953 51.2734 53.5 50.4766 53.5H29.5234C28.7266 53.5 28.0234 53.1953 27.4141 52.5859C26.8047 51.9766 26.5 51.2734 26.5 50.4766V40.6328L31 45.1328L36.9766 39.0859L43.0234 45.1328L49 39.1562ZM53.5 29.5234V39.3672L49 34.8672L43.0234 40.9141L36.9766 34.8672L31 40.9141L26.5 36.3438V29.5234C26.5 28.7266 26.8047 28.0234 27.4141 27.4141C28.0234 26.8047 28.7266 26.5 29.5234 26.5H50.4766C51.2734 26.5 51.9766 26.8047 52.5859 27.4141C53.1953 28.0234 53.5 28.7266 53.5 29.5234Z"
          fill="#D4D4D5"
        />
      </g>
      <rect x="0.5" y="0.5" width="79" height="79" stroke="#D4D4D5" />
      <defs>
        <clipPath id="thm-broken-clip0">
          <rect width="79" height="80" fill="white" transform="translate(1)" />
        </clipPath>
      </defs>
    </svg>
  );
};
