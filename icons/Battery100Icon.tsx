import * as React from "react";

export const Battery100Icon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.875 10.556C3.875 9.63542 4.62077 8.88889 5.54134 8.88795L16.5804 8.8767C17.5022 8.87576 18.2501 9.62284 18.2501 10.5447V13.4587C18.2501 14.3792 17.5043 15.1258 16.5838 15.1267L5.54474 15.1379C4.62284 15.1389 3.875 14.3918 3.875 13.4699V10.556Z" fill={props.htmlColor || "#888"}/>
<rect x="2.66665" y="7.66665" width="16.9991" height="8.6667" rx="2.6666" stroke={props.htmlColor || "#888"} strokeWidth="1.3"/>
<path d="M22.4531 12.1667C22.4531 13.1298 22.0357 13.5363 21.6833 13.708C21.435 13.8289 21.2031 13.6095 21.2031 13.3333V11C21.2031 10.7239 21.435 10.5045 21.6833 10.6254C22.0357 10.797 22.4531 11.2035 22.4531 12.1667Z" fill={props.htmlColor || "#888"}/>
</svg>
  );
};
