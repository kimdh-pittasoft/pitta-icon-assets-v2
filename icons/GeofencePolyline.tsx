import * as React from "react";

export const GeofencePolyline = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 24" {...props}>
      <line x1="1" y1="11" x2="17" y2="11" strokeWidth="2" stroke={props.htmlColor || "#888"} />
    </svg>
  );
};
