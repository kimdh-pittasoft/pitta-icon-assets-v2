import * as React from "react";

export const ChevronBackwardIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -960 960 960" fill={props.htmlColor || "#888"} {...props}>
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
      </svg>
  );
};
