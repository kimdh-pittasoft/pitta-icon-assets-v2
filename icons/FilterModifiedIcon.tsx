import * as React from "react";

    export const FilterModifiedIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string; backgroundColor?: string; accentColor?: string; }) => {
  return (
    
<svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 14.9844V13.0156H18V14.9844H6ZM3 8H21V10.0156H3V8ZM9.98438 20V17.9844H14.0156V20H9.98438Z" fill={props.htmlColor || "#888"}/>
<circle cx="24" cy="2" r="2" fill={props.accentColor || "#0095e0"}/>
</svg>


  );
};




