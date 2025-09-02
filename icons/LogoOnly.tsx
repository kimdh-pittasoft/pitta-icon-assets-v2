import * as React from "react";

export const LogoOnly = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.878.118c9.87 0 17.878 8.036 17.878 17.941 0 9.904-8.008 17.94-17.878 17.94C8.008 35.97 0 27.964 0 18.06 0 8.125 8.008.119 17.878.119z"
        fill="#030303"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.879 33.717c-8.63 0-15.603-7.028-15.603-15.658C2.276 9.4 9.25 2.402 17.879 2.402c8.628 0 15.602 6.998 15.602 15.657 0 8.63-7.003 15.658-15.602 15.658z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.878 5.516c-6.885 0-12.47 5.604-12.47 12.514 0 6.91 5.585 12.543 12.47 12.543 6.885 0 12.5-5.604 12.5-12.543-.03-6.91-5.615-12.514-12.5-12.514z"
        fill="#030303"
      />
      <path
        d="M16.016 18.979C15.78 6.405 10.934 2.579 5.437 0c0 0-.768 11.15 10.58 18.979z"
        fill="#678D2A"
      />
      <path
        d="M15.78 18.474C15.603 7.117 10.698 2.758 5.644.415c0 0-.207 10.794 10.136 18.06z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M15.603 19.75c-5.644-7.265-10.166-7.443-14.48-6.524 0 0 4.344 6.88 14.48 6.524z"
        fill="#3576AE"
      />
      <path
        d="M14.983 19.483c-5.201-6.672-9.811-6.88-13.505-6.109 0 0 4.699 6.346 13.505 6.109z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        d="M19.12 25.591l-5.615.386s1.211-5.397 3.369-6.79v-.09c-.06-2.431-.266-4.507-.71-6.287l3.546 4.923s3.458-2.49 7.388 0c0 0 3.635.09 8.127 1.186 0 0-5.29-.296-8.452 1.186 0-.03-.827 4.508-7.654 5.486z"
        fill="#E2AF00"
      />
      <path
        d="M19.06 25.355l-5.23.355s1.182-5.308 3.31-6.435l-.09-.118c-.029-2.076-.147-3.677-.502-5.427l3.014 4.3s3.813-2.52 7.329-.06c0 0 2.63-.148 6.442.772 0 0-3.398-.356-6.767 1.126.03 0-.71 4.597-7.506 5.487z"
        fill="url(#prefix__paint2_linear)"
      />
      <path
        d="M12.44 23.931s2.07 6.969 3.931 7.68c-1.36.475-3.753 1.632-5.349 3.351-.088.149-.827-6.82 1.419-11.03z"
        fill="#A60C1C"
      />
      <path
        d="M12.352 24.376s1.95 6.583 3.546 7.176c-1.152.386-3.428 1.483-4.787 2.966-.059.148-.532-5.99 1.241-10.142z"
        fill="url(#prefix__paint3_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={7.685}
          y1={0.545}
          x2={14.655}
          y2={18.808}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8BC126" />
          <stop offset={1} stopColor="#8CC125" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={2.272}
          y1={13.693}
          x2={14.835}
          y2={18.667}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#569DD2" />
          <stop offset={1} stopColor="#5FA8E0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={21.916}
          y1={13.341}
          x2={23.922}
          y2={23.849}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FADDA2" />
          <stop offset={0.076} stopColor="#F9D793" />
          <stop offset={0.4} stopColor="#F5C35B" />
          <stop offset={0.673} stopColor="#F2B42E" />
          <stop offset={0.882} stopColor="#F0AC0C" />
          <stop offset={1} stopColor="#F0A900" />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear"
          x1={14.453}
          y1={24.69}
          x2={12.849}
          y2={34.541}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D76049" />
          <stop offset={0.321} stopColor="#D34635" />
          <stop offset={0.767} stopColor="#CE2223" />
          <stop offset={1} stopColor="#CC0B1E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
