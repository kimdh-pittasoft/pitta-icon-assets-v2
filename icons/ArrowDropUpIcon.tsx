import * as React from "react";

export const ArrowDropUpIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -960 960 960" fill={props.htmlColor || "#888"} {...props}>
      <path d="m280-400 200-200 200 200H280Z" />
    </svg>
  );
};