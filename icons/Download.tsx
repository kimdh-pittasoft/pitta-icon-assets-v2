import React from "react";

export const DownloadIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => (
  <svg width="1em" height="1em" viewBox="0 0 25 24" fill="none">
    <rect x="4.33301" y="4" width="16" height="16" rx="1" stroke={props.htmlColor || "#888"} stroke-width="2"></rect>
    <path d="M15.0602 10.254H13.572V6.29622C13.572 6.13165 13.4557 6 13.3084 6H11.5489C11.4016 6 11.2854 6.13165 11.2854 6.29622V10.254H9.60339C9.48712 10.254 9.39411 10.3363 9.35536 10.4433C9.3166 10.5502 9.32435 10.6819 9.40961 10.7724L12.138 13.9074C12.2465 14.0309 12.417 14.0309 12.5256 13.9074L15.2539 10.7724C15.4245 10.5831 15.3005 10.254 15.0602 10.254Z" fill={props.htmlColor || "#888"}></path>
    <path d="M4.33301 15H7.98582C8.7355 15 9.47009 15.2107 10.1058 15.608L10.743 16.0063C11.7158 16.6143 12.9502 16.6143 13.923 16.0063L14.5602 15.608C15.1959 15.2107 15.9305 15 16.6802 15H20.333" stroke={props.htmlColor || "#888"} stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
);
