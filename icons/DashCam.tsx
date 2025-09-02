import * as React from "react"

export const DashCam = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string, accentColor?: string }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect
        x={0.5}
        y={1.5}
        width={15}
        height={9}
        rx={2.5}
        fill={props.htmlColor || "#13131C"}
        stroke="#fff"
      />
      <circle cx={6} cy={6} r={1.5} fill={props.htmlColor || "#13131C"} stroke="#fff" />
      <circle cx={14} cy={3} r={2.5} fill={props.accentColor || "#D81A26"} stroke="#fff" />  
    </svg>
  );
};
