import * as React from "react"

export const FilterIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
  
  <path d="M6,12.98v-1.97h12v1.97H6ZM3,6h18v2.02H3v-2.02ZM9.98,18v-2.02h4.03v2.02h-4.03Z" fill={props.htmlColor || "#888"} />
</svg>


  );
};
