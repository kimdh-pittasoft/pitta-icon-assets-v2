import React from "react";

export const UncategorizedCardIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => (
  <svg viewBox="0 0 23 18" fill="none" {...props}>
    <path
      d="M20.7 0H2.3C1.0235 0 0.0115 1.00125 0.0115 2.25L0 15.75C0 16.9988 1.0235 18 2.3 18H20.7C21.9765 18 23 16.9988 23 15.75V2.25C23 1.00125 21.9765 0 20.7 0ZM20.7 15.75H2.3V9H20.7V15.75ZM20.7 4.5H2.3V2.25H20.7V4.5Z"
      fill={props.htmlColor || "#7E7E83"}
    />
  </svg>
);
