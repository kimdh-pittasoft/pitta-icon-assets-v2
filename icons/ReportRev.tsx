import * as React from "react";

export const ReportRev = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg {...props} viewBox="0 0 25 24">
      <path
        d="M20.0246 15.1118C19.5071 16.3154 18.6976 17.376 17.6669 18.2009C16.6361 19.0257 15.4156 19.5898 14.1121 19.8436C12.8085 20.0975 11.4615 20.0335 10.1888 19.6573C8.9162 19.281 7.75668 18.6039 6.81165 17.6851C5.86661 16.7664 5.16483 15.634 4.76767 14.387C4.37051 13.1399 4.29005 11.8162 4.53334 10.5315C4.77662 9.24684 5.33624 8.04032 6.16326 7.01744C6.99028 5.99456 8.05953 5.18647 9.27753 4.66382"
        stroke={props.htmlColor || "#2EA8E5"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20.6674 12C20.6674 10.9494 20.4569 9.90914 20.0481 8.93853C19.6392 7.96793 19.04 7.08601 18.2845 6.34315C17.529 5.60028 16.6322 5.011 15.6451 4.60896C14.6581 4.20693 13.6002 4 12.5318 4V12H20.6674Z"
        stroke="#DF434D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
