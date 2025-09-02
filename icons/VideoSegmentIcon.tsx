import * as React from "react";

export const VideoSegmentIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <path
        d="M6 12V22C6 24.8 8.4 27.2 11.2 27.2H25.6C26.7 27.2 27.6 26.3 27.6 25.2V15.2C27.6 12.4 25.2 10 22.4 10H8C6.9 10 6 10.9 6 12Z"
        fill={props.htmlColor || "#888"}
      />
      <path
        d="M29.2 23.8L33.4 27.4C34 28 35 27.9 35.6 27.2C35.8 26.9 36 26.5 36 26.1V11.1C36 10.1 35.3 9.4 34.4 9.4C34 9.4 33.6 9.5 33.3 9.8L29.2 13.4C28.8 13.7 28.6 14.2 28.6 14.6V22.6C28.6 23 28.8 23.5 29.2 23.8Z"
        fill={props.htmlColor || "#888"}
      />
    </svg>
  );
};
