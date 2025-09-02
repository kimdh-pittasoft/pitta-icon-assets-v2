import * as React from "react"

export const DefaultUserBoxIcon = (props: React.SVGProps<SVGSVGElement> & { backgroundColor?: string, iconColor?: string }) => {
  return (
<svg width="1em" height="1em" viewBox="0 0 50 50" fill={props.backgroundColor || "#0095e0"} {...props}>
  
  <path d="M48,25c0,12.7-10.3,23-23,23S2,37.7,2,25,12.3,2,25,2s23,10.3,23,23Z" fill={props.backgroundColor || "#0095e0"}/>
  <path d="M18.23,37.14c-1.16-.76-1.65-2.18-1.28-3.52.37-1.38,1.11-2.65,2.16-3.67,1.56-1.53,3.68-2.39,5.89-2.39s4.33.86,5.89,2.39c1.05,1.03,1.79,2.29,2.16,3.67.36,1.34-.13,2.76-1.28,3.52-1.28.84-3.43,1.75-6.77,1.75s-5.49-.91-6.77-1.75ZM25,26.53c-3.45,0-6.25-2.74-6.25-6.12s2.8-6.12,6.25-6.12,6.25,2.74,6.25,6.12-2.8,6.12-6.25,6.12Z" fill={props.iconColor || "#fff"}/>
</svg>

  );
};
