import * as React from "react";

export const LiveviewRevIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string, accentColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
<path d="M8.23,10.5c-1.24,0-2.24,1-2.24,2.25s1,2.25,2.24,2.25,2.25-1.01,2.25-2.25-1-2.25-2.25-2.25ZM8.23,13.49c-.41,0-.74-.33-.74-.75s.33-.74.74-.74.75.33.75.74-.33.75-.75.75Z" fill={props.accentColor || "#D81A26"} />
  <path d="M20.25,9.02c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5.67-1.5,1.5-1.5,1.5.67,1.5,1.5Z" fill={props.accentColor || "#D81A26"} />
  <path d="M15.75,6.75c.31,0,.62.03.92.09-.39.38-.68.86-.82,1.41-.03,0-.06,0-.1,0H6.75c-1.66,0-3,1.34-3,3v3c0,1.66,1.34,3,3,3h9c1.66,0,3-1.34,3-3v-2.25c.55,0,1.06-.15,1.5-.41v2.66c0,2.49-2.01,4.5-4.5,4.5H6.75c-2.49,0-4.5-2.01-4.5-4.5v-3c0-2.49,2.01-4.5,4.5-4.5h9Z" fill={props.htmlColor || "#888"} />
</svg>
  );
};
