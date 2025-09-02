import * as React from "react";

export const ChevronForwardIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -960 960 960" fill={props.htmlColor || "#888"} {...props}>
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </svg>
  );
};
