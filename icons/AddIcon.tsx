import * as React from "react";

export const AddIcon = (props: React.SVGProps<SVGSVGElement> & { backgroundColor?: string, htmlColor?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill={props.backgroundColor || "#2ea8e5"} />
      <rect x="11" y="7" width="2" height="10" fill={props.htmlColor || "#0095e0"} />
      <rect x="7" y="11" width="10" height="2" fill={props.htmlColor || "#0095e0"} />
    </svg>
  );
};

export default AddIcon;