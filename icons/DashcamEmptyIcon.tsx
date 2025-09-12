import React from "react";

export const DashcamEmptyIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 -960 960 960" fill="none" {...props}>
      <path
        d="M13 17.5H48C52.1421 17.5 55.5 20.8579 55.5 25V35C55.5 39.1421 52.1421 42.5 48 42.5H13C8.85786 42.5 5.5 39.1421 5.5 35V25C5.5 20.8579 8.85786 17.5 13 17.5Z"
        stroke={props.htmlColor || "#888"}
        strokeWidth="5"

      />
      <path d="M9.5625 7.5H19.5625C20.9432 7.5 22.0625 8.61929 22.0625 10C22.0625 11.3807 20.9432 12.5 19.5625 12.5H9.5625C8.18179 12.5 7.0625 11.3807 7.0625 10C7.0625 8.61929 8.18179 7.5 9.5625 7.5Z" />
      <path
        d="M38.125 34.75C35.4326 34.75 33.25 32.5674 33.25 29.875C33.25 27.1826 35.4326 25 38.125 25C40.8174 25 43 27.1826 43 29.875C43 32.5674 40.8174 34.75 38.125 34.75Z"
        stroke={props.htmlColor || "#888"}
        strokeWidth="5"

      />
    </svg>
  );
};
