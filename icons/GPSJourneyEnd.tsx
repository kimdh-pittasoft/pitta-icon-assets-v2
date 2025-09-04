import * as React from "react";

export const GpsDrowsiness = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string, backgroundColor?: string, iconColor?: string }) => {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" viewBox="0 0 45.35 45.35" {...props}>
  
  <ellipse cx="23.52" cy="51.02" rx="6" ry="3.5" fill={props.htmlColor || "#d81a26"} />
  <g>
    <polygon points="22.02 51.02 22.02 15.02 25.02 15.02 25.02 18.02 45.67 18.02 40.95 26.52 45.67 35.02 25.02 35.02 25.02 51.02 22.02 51.02" fill={props.htmlColor || "#d81a26"} stroke={props.iconColor || "#fff"} />
    <path d="M24.52,15.52v3h20.3l-4.17,7.51-.27.49.27.49,4.17,7.51h-20.3v16h-2V15.52h2M25.52,14.52h-4v37h4v-16h21l-5-9,5-9h-21v-3h0Z" fill={props.iconColor || "#fff"} />
  </g>
</svg>
  );
};
