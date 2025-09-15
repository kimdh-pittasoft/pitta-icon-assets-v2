import * as React from "react";

export const GpsJourneyEnd = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string, backgroundColor?: string, iconColor?: string }) => {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" viewBox="0 0 48 48" {...props}>
      <defs>
        <filter id="shadow-journey-end" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.3)"/>
        </filter>
      </defs>
      <ellipse cx="23.52" cy="51.02" rx="6" ry="3.5" fill={props.htmlColor || "#d81a26"} filter="url(#shadow-journey-end)" />
      <g>
        <polygon points="22.02 51.02 22.02 15.02 25.02 15.02 25.02 18.02 45.67 18.02 40.95 26.52 45.67 35.02 25.02 35.02 25.02 51.02 22.02 51.02" fill={props.htmlColor || "#d81a26"} stroke={props.iconColor || "#fff"} filter="url(#shadow-journey-end)" />
        <path d="M24.52,15.52v3h20.3l-4.17,7.51-.27.49.27.49,4.17,7.51h-20.3v16h-2V15.52h2M25.52,14.52h-4v37h4v-16h21l-5-9,5-9h-21v-3h0Z" fill={props.iconColor || "#fff"} />
      </g>
    </svg>
  );
};
