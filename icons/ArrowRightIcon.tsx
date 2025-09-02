import * as React from "react";

export const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -960 960 960" fill={props.htmlColor || "#888"} {...props}>
      <path d="M400-280v-400l200 200-200 200Z"/>
      </svg>
  );
};