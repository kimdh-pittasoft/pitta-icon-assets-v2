import * as React from "react";

export const Battery25Icon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.875 10.5528C3.875 9.63348 4.61883 8.88747 5.53815 8.88478L7.20211 8.8799C8.12524 8.8772 8.87503 9.62479 8.87503 10.5479V13.4618C8.87503 14.3812 8.1312 15.1272 7.21188 15.1299L5.54793 15.1347C4.62479 15.1375 3.875 14.3899 3.875 13.4667V10.5528Z" fill={props.htmlColor || "#888"}/>
<rect x="2.66665" y="7.66665" width="16.9991" height="8.6667" rx="2.6666" stroke={props.htmlColor || "#888"} strokeWidth="1.3"/>
<path d="M22.4531 12.1667C22.4531 13.1298 22.0357 13.5363 21.6833 13.708C21.435 13.8289 21.2031 13.6095 21.2031 13.3333V11C21.2031 10.7239 21.435 10.5045 21.6833 10.6254C22.0357 10.797 22.4531 11.2035 22.4531 12.1667Z" fill={props.htmlColor || "#888"}/>
</svg>
  );
};

