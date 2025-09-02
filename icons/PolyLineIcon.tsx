import React from "react";

export const PolyLineIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M18.98,12.98H5.02v-1.97h13.97v1.97Z" fill={props.htmlColor || "#888"} />
</svg>
  );
};

