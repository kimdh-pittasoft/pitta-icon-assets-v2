import React from "react";

export const LiveViewBlueIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#lvb-clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2111 5.75V10.125L23 6.19643V17.8036L19.2111 13.875V18.25C19.2111 18.9375 18.6611 19.5 17.9889 19.5H2.22222C1.55 19.5 1 18.9375 1 18.25V5.75C1 5.0625 1.55 4.5 2.22222 4.5H17.9889C18.6611 4.5 19.2111 5.0625 19.2111 5.75ZM6.09769 13.9342H3.60309V9.32031H2.64828V14.6775H6.09769V13.9342ZM6.88645 14.6775H7.83748V9.32031H6.88645V14.6775ZM10.9472 13.5111L12.3436 9.32031H13.3928L11.4152 14.6775H10.4906L8.52057 9.32031H9.56596L10.9472 13.5111ZM14.9703 12.2859H17.2271V11.55H14.9703V10.0709H17.5819V9.32031H14.0155V14.6775H17.6083V13.9342H14.9703V12.2859Z"
          fill={props.htmlColor || "#2EA8E5"}
        />
      </g>
      <defs>
        <clipPath id="lvb-clip0">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
