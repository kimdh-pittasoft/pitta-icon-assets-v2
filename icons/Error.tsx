import React from "react";

export const Error = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 108 108" fill="none" {...props}>
      <circle cx="54" cy="54" r="52.5" stroke={props.htmlColor || "#D81A26"} strokeWidth="3" />
      <rect x="51" y="22" width="6" height="47" rx="1" fill={props.htmlColor || "#D81A26"} />
      <rect x="51" y="80" width="6" height="6" rx="1" fill={props.htmlColor || "#D81A26"} />
    </svg>
  );
};
