import React from "react";

export const Stat1Icon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill={props.htmlColor || "#888"} {...props}><path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg>
  );
};

