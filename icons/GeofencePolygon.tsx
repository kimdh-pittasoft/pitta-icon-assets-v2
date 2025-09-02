import * as React from "react";

export const GeofencePolygon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 24" {...props}>
      <path
        d="M1.61606 9.60081L9 4.23607L16.3839 9.60081L13.5635 18.2812H4.43648L1.61606 9.60081Z"
        fillOpacity="0.5"
        strokeWidth="2"
        fill={props.htmlColor || "#888"}
      />
    </svg>
  );
};
