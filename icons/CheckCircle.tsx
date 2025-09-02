import * as React from "react";

export const CheckCircle = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  const { htmlColor = "#fff", ...svgProps } = props;
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={htmlColor}
      {...svgProps}
    >
      <path
        d="M17.6667 11.3V11.8367C17.666 13.0946 17.2586 14.3186 16.5054 15.3261C15.7523 16.3336 14.6936 17.0706 13.4873 17.4273C12.281 17.7839 10.9917 17.7411 9.81177 17.3052C8.63181 16.8692 7.62438 16.0636 6.93973 15.0083C6.25507 13.953 5.92988 12.7047 6.01264 11.4495C6.09541 10.1943 6.5817 8.99953 7.399 8.0433C8.21629 7.08707 9.32079 6.42065 10.5478 6.14342C11.7748 5.8662 13.0585 5.99304 14.2075 6.50501"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6673 7.17041L11.834 13.0096L10.084 11.2596"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
