import React from "react";

export const MoreHorizIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="6" cy="12" r="2" fill={props.htmlColor || "#888"} />
      <circle cx="12" cy="12" r="2" fill={props.htmlColor || "#888"} />
      <circle cx="18" cy="12" r="2" fill={props.htmlColor || "#888"} />
    </svg>
  );
};
