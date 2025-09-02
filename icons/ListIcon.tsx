import React from "react";

export const ListIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => (  
  <svg width="24" height="24" viewBox="0 0 24 24" fill={props.htmlColor || "#888"} {...props}>
    <path d="M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"></path>
  </svg>
);
