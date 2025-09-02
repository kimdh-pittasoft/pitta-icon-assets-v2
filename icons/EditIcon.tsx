import React from "react";

export const EditIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg height="1em" width="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M16 3L21 8L8 21H3V16L16 3Z"
        stroke={props.htmlColor || "#888"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
