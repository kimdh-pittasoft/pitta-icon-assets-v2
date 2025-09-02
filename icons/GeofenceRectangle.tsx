import * as React from "react";

export const GeofenceRectangle = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg {...props} viewBox="0 0 18 24">
      <rect
        x="2"
        y="5"
        width="14"
        height="14"
        fillOpacity="0.5"
        strokeWidth="2"
        fill={props.htmlColor || "#888"}
      />
    </svg>
  );
};
