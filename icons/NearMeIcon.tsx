import * as React from "react"

export const NearMeIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (

<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill={props.htmlColor || "#888"} {...props}>
<path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Z"/>
</svg>
  );
};


