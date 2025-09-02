import * as React from "react"

export const MapIcon2Icon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (

<svg width="1em" height="1em" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.375 5L3.375 8V21L9.375 18L15.375 21L21.375 18V5" stroke={props.htmlColor || "#888"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.375 5V18" stroke={props.htmlColor || "#888"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.375 14L15.375 21" stroke={props.htmlColor || "#888"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.375 6.1C19.375 3.61 17.475 2 15.375 2C13.275 2 11.375 3.61 11.375 6.1C11.375 7.76 12.705 9.73 15.375 12C18.045 9.73 19.375 7.76 19.375 6.1ZM15.375 7C14.785 7 14.305 6.52 14.305 5.93C14.305 5.34 14.785 4.86 15.375 4.86C15.965 4.86 16.445 5.34 16.445 5.93C16.445 6.52 15.965 7 15.375 7Z" fill={props.htmlColor || "#888"}/>
</svg>

  );
};


