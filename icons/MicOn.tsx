import React from "react";

export type MicOnProps = React.SVGProps<SVGSVGElement> & { volume?: number };

export const MicOn = (props: MicOnProps & { htmlColor?: string }) => {
  const { volume = 5, ...restProps } = props;

  return (
    <svg viewBox="0 0 24 24" {...restProps}>
      <svg
        version="1.1"
          width="1em"
        height="1em"
        viewBox="0 0 14 19"
        fill="none"
      >
        <defs>
          <clipPath id="round-corner">
            <rect width="4" height="10" rx="2" ry="2" />
          </clipPath>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 8.5332H11.9295C11.9295 9.9258 11.4351 11.0814 10.4463 11.9999C9.48658 12.8888 8.33781 13.3332 7 13.3332C5.66219 13.3332 4.49888 12.8888 3.51007 11.9999C2.55034 11.0814 2.07047 9.9258 2.07047 8.5332H0.5C0.5 10.1332 1.03803 11.5406 2.11409 12.7554C3.21924 13.9406 4.54251 14.6517 6.08389 14.8888V16.9999H3.25V18.4999H10.75V16.9999H7.91611V14.8888C9.45749 14.6517 10.7662 13.9406 11.8423 12.7554C12.9474 11.5406 13.5 10.1332 13.5 8.5332Z"
          fill={props.htmlColor || "#EEEEF3"}
        />
        <g
          transform="translate(5 11) scale(1 -1)"
          clipPath="url(#round-corner)"
        >
          <rect
            width="4"
            fill={props.htmlColor || "#EEEEF3"}
            style={{
              height: Math.min(volume, 10),
              transition: "height 0.1s ease 0.1s",
            }}
          ></rect>
        </g>

        <path
          d="M8.60816 10.1831C8.14507 10.6549 7.61749 10.8778 7.00191 10.8778C6.38633 10.8778 5.85875 10.6549 5.39565 10.1831C4.93238 9.71111 4.70996 9.16924 4.70996 8.53333V2.84444C4.70996 2.20854 4.93238 1.66667 5.39565 1.19469C5.85875 0.722887 6.38633 0.5 7.00191 0.5C7.61749 0.5 8.14507 0.722887 8.60816 1.19469C9.07143 1.66667 9.29385 2.20854 9.29385 2.84444V8.53333C9.29385 9.16924 9.07143 9.71111 8.60816 10.1831Z"
          stroke={props.htmlColor || "#EEEEF3"}
        />
      </svg>
    </svg>
  );
};
