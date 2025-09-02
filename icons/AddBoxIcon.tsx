import * as React from "react";

export const AddBoxIcon = (props: React.SVGProps<SVGSVGElement> & { backgroundColor?: string, iconColor?: string }) => {
  
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>

<rect x="2" y="2" width="20" height="20" rx="3.63636" fill={props.backgroundColor || "#0095E0"}/>
<path d="M17.2914 12.7459H12.7459V17.2914H11.2544V12.7459H6.70898V11.2544H11.2544V6.70898H12.7459V11.2544H17.2914V12.7459Z" fill={props.iconColor || "#fff"} />

</svg>
  );
};

