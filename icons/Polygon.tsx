import React from "react";

export const Polygon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        d="M9.39294 1.72216C9.75134 1.44837 10.2487 1.44837 10.6071 1.72216L18.2843 7.58707C18.6174 7.84149 18.7564 8.27657 18.6327 8.67697L15.6605 18.2952C15.531 18.7143 15.1436 19 14.7051 19H5.29494C4.85638 19 4.469 18.7143 4.33952 18.2952L1.36731 8.67697C1.24358 8.27657 1.38264 7.84149 1.71567 7.58707L9.39294 1.72216Z"
        strokeWidth="2"
        stroke={props.htmlColor || "#888"}
      />
    </svg>
  );
};
