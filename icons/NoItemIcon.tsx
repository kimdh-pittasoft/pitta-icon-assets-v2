import * as React from "react";

export const NoItemIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 200 200"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125.333 26.43l-7.309 11.872a63.855 63.855 0 00-3.593-2.094l6.527-12.328a78.078 78.078 0 014.375 2.55zM97.155 15.676L94.912 29.48a62.353 62.353 0 00-4.097-.553L92.15 15c1.68.17 3.349.396 5.005.676zm-30.068.945l3.19 13.635a64.109 64.109 0 00-4.018 1.077l-4.054-13.404a77.635 77.635 0 014.882-1.308zM39.689 29.057l8.12 11.392a62.433 62.433 0 00-3.273 2.528l-8.843-10.832a76.187 76.187 0 013.996-3.088zM19.181 51.15a77.91 77.91 0 00-2.514 4.397l12.266 6.626a63.94 63.94 0 012.064-3.61L19.18 51.15z"
        fill={`${props.htmlColor}56` || "#E9E9EA"}
      />
      <path
        d="M172.328 130.819H83.64c11.391 0 14.646 10 14.646 20l8.333 11.666h82.021c-5.534-1.118-4.595-2.813-5-11.666 0-10-.735-20-11.312-20z"
        fill="#fff"
      />
      <path
        d="M172.328 130.819H83.64c11.391 0 14.646 10 14.646 20l8.333 11.666h82.021c-5.534-1.118-4.595-2.813-5-11.666 0-10-.735-20-11.312-20z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M172.328 130.819H83.64c11.391 0 14.646 10 14.646 20l8.333 11.666h82.021c-5.534-1.118-4.595-2.813-5-11.666 0-10-.735-20-11.312-20z"
        stroke={props.htmlColor || "#D4D4D5"}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <ellipse
        cx={123.224}
        cy={177.902}
        rx={70.417}
        ry={7.917}
        fill={`${props.htmlColor}56` || "#E9E9EA"}
      />
      <path
        d="M173.64 130.819H85.402c-7.286 0-10.524 5.833-10.524 16.667v11.666c0 10-3.238 20-14.571 20h88.238c10.524 0 14.571-10 14.571-20v-11.666c0-10.834 3.238-16.667 10.524-16.667z"
        fill={props.htmlColor || "#E9E9EA"}
        stroke={props.htmlColor || "#D4D4D5"}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <path
        d="M46.974 55.819h90.833v103.333c0 10 3.333 20 15 20H61.974c-10.834 0-15-10-15-20V55.819z"
        fill="#fff"
      />
      <path
        d="M46.974 55.819h90.833v103.333c0 10 3.333 20 15 20H61.974c-10.834 0-15-10-15-20V55.819z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        d="M46.974 55.819h90.833v103.333c0 10 3.333 20 15 20H61.974c-10.834 0-15-10-15-20V55.819z"
        stroke={props.htmlColor || "#D4D4D5"}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <path
        d="M128.64 154.986c14.268 0 25.833-11.566 25.833-25.834 0-14.267-11.565-25.833-25.833-25.833-14.267 0-25.833 11.566-25.833 25.833 0 14.268 11.566 25.834 25.833 25.834z"
        fill="#fff"
        stroke={props.htmlColor || "#D4D4D5"}
        strokeWidth={5}
      />
      <path
        d="M140.494 117.891a2.245 2.245 0 00-3.119 0l-8.423 8.218-9.046-8.826a2.245 2.245 0 00-3.12 0 2.115 2.115 0 000 3.043l9.047 8.826-9.047 8.826a2.117 2.117 0 000 3.044c.862.84 2.258.84 3.12 0l9.046-8.826 8.423 8.217a2.243 2.243 0 003.119 0 2.115 2.115 0 000-3.043l-8.423-8.218 8.423-8.217a2.117 2.117 0 000-3.044z"
        fill={props.htmlColor || "#D4D4D5"}
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={135.307}
          y1={162.485}
          x2={135.307}
          y2={130.819}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`${props.htmlColor}56` || "#E9E9EA"} />
          <stop offset={0.297} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.708} stopColor={`${props.htmlColor}56` || "#E9E9EA"} />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={99.89}
          y1={55.819}
          x2={99.89}
          y2={179.152}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.88} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor={`${props.htmlColor}56` || "#E9E9EA"} />
        </linearGradient>
      </defs>
    </svg>
  );
};
