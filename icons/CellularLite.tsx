import * as React from "react";

export const CellularLite = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill={props.htmlColor || "#888"} {...props}>

      <path d="M3 11H6V13H3V11Z" fill={props.htmlColor || "#888"} />
      <path d="M8 9H11V13H8V9Z" fill={props.htmlColor || "#888"} />
      <path d="M13 6H16V13H13V6Z" fill={props.htmlColor || "#888"} />
      <path d="M18 3H21V13H18V3Z" fill={props.htmlColor || "#888"} />
      <path
        d="M4.35265 19.8874H6.70726V21H3V15H4.35265V19.8874Z"
        fill={props.htmlColor || "#888"}
      />
      <path d="M9.58705 21H8.23825V15H9.58705V21Z" fill={props.htmlColor || "#888"} />
      <path
        d="M15.6847 16.1168H14.0006V21H12.648V16.1168H10.9947V15H15.6847V16.1168Z"
        fill={props.htmlColor || "#888"}
      />
      <path
        d="M20.6069 18.4574H18.4797V19.8874H20.9923V21H17.127V15H21V16.1168H18.4797V17.3819H20.6069V18.4574Z"
        fill={props.htmlColor || "#888"}
      />
    </svg>
  );
};
