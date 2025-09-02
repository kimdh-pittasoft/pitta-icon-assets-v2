import * as React from "react";

export const InventoryIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string, accentColor?: string }) => {
  return (
<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  
  <path d="M9.5,12.8c0-.44.36-.8.8-.8h3.4c.44,0,.8.36.8.8h0c0,.44-.36.8-.8.8h-3.4c-.44,0-.8-.36-.8-.8h0Z" fill={props.accentColor || "#d81a26"}/>
  <path d="M18.56,4.01c.81.08,1.44.76,1.44,1.59v2.96c-.07.61-.47,1.11-1.02,1.33,0,.07.02.14.02.21v8.7c0,.83-.63,1.51-1.44,1.59h-.16s-10.8,0-10.8,0h-.16c-.81-.09-1.44-.77-1.44-1.6v-8.7c0-.07,0-.14.01-.21-.55-.21-.95-.72-1.01-1.33v-.16s0-2.8,0-2.8c0-.88.72-1.6,1.6-1.6h12.96ZM6.6,10c-.05,0-.1.04-.1.1v8.7c0,.06.04.1.1.1h10.8c.06,0,.1-.05.1-.1v-8.7c0-.05-.04-.1-.1-.1H6.6ZM5.6,5.5s-.08.03-.09.06v.04s0,2.8,0,2.8c0,.05.04.1.1.1h12.8c.05,0,.1-.04.1-.1v-2.8c0-.05-.04-.1-.1-.1H5.6Z" fill={props.htmlColor || "#0095e0"}/> 
</svg>
  );
};
