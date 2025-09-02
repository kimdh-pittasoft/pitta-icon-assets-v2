import * as React from "react";

export const GeofenceCircle = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 24" {...props}>
      <circle cx="9" cy="12" r="8" fillOpacity="0.5" strokeWidth="2" fill={props.htmlColor || "#888"} />
    </svg>
  );
};
