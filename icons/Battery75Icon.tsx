import * as React from "react";

export const Battery75Icon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.875 10.5556C3.875 9.6352 4.62055 8.88873 5.54098 8.88759L14.08 8.87706C15.002 8.87592 15.7501 9.62306 15.7501 10.5451V13.459C15.7501 14.3794 15.0045 15.1259 14.0841 15.1271L5.54509 15.1376C4.62306 15.1387 3.875 14.3916 3.875 13.4696V10.5556Z" fill={props.htmlColor || "#888"}/>
<rect x="2.66665" y="7.66665" width="16.9991" height="8.6667" rx="2.6666" stroke={props.htmlColor || "#888"} strokeWidth="1.3"/>
<path d="M22.4531 12.1667C22.4531 13.1298 22.0357 13.5363 21.6833 13.708C21.435 13.8289 21.2031 13.6095 21.2031 13.3333V11C21.2031 10.7239 21.435 10.5045 21.6833 10.6254C22.0357 10.797 22.4531 11.2035 22.4531 12.1667Z" fill={props.htmlColor || "#888"}/>
</svg>
  );
};
