import React from "react";

export const MoreVertIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="5" r="1.75" fill={props.htmlColor || "#888"} />
      <circle cx="12" cy="12" r="1.75" fill={props.htmlColor || "#888"} />
      <circle cx="12" cy="19" r="1.75" fill={props.htmlColor || "#888"} />
    </svg>
  );
};
