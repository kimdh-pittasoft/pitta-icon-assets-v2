import * as React from "react"

export const MapviewToggle2Icon = (props: React.SVGProps<SVGSVGElement> & { backgroundColor?: string, iconColor?: string }) => {
  return (
    
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 42" {...props}>
      
      <rect x="3" y="3" width="44" height="36" rx="7" ry="7" fill={props.backgroundColor || "#0095e0"} />
  <rect x="19.98" y="15.98" width="14.02" height="2.02" fill={props.iconColor || "#fff"}/>
  <rect x="19.98" y="24" width="14.02" height="2.02" fill={props.iconColor || "#fff"}/>
  <rect x="19.98" y="20.02" width="14.02" height="1.97" fill={props.iconColor || "#fff"}/>
  <rect x="16" y="15.98" width="2.02" height="2.02" fill={props.iconColor || "#fff"}/>
  <rect x="16" y="24" width="2.02" height="2.02" fill={props.iconColor || "#fff"}/>
  <rect x="16" y="20.02" width="2.02" height="1.97" fill={props.iconColor || "#fff"}/>
</svg>

  );
};


