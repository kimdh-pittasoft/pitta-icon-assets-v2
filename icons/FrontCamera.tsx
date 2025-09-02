import * as React from "react";

export const FrontCamera = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 10" {...props}>
      <path
        d="M10.3333 4V1.66667C10.3333 1.3 10.0333 1 9.66667 1H1.66667C1.3 1 1 1.3 1 1.66667V8.33333C1 8.7 1.3 9 1.66667 9H9.66667C10.0333 9 10.3333 8.7 10.3333 8.33333V6L13 8.66667V1.33333L10.3333 4Z"
        stroke={props.htmlColor || "#0095e0"}
        strokeLinejoin="round"
      />
    </svg>
  );
};
