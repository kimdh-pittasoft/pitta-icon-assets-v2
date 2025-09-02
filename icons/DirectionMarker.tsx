import React from "react";
import { GoogleMapProps } from "../constants/Types";

export const DirectionMarker = ({
  $hover,
  $getDimensions,
  $dimensionKey,
  $geoService,
  $onMouseAllow,
  $prerender,
  lat,
  lng,
  ...props
}: React.SVGProps<SVGSVGElement> & GoogleMapProps) => {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      {/* <g filter="url(#filter0_ddd)"> */}
      <g>
        <path
          d="M4 16.2632L10 3L16 16.2632L15.2 17L10 15L4.8 17L4 16.2632Z"
          fill="#0095E0"
        />
        <path
          d="M10.1795 14.5333L10 14.4643L9.82051 14.5333L4.91033 16.4219L4.60444 16.1401L10 4.2131L15.3956 16.1401L15.0897 16.4219L10.1795 14.5333Z"
          stroke="white"
        />
      </g>
      {/* <defs>
        <filter
          id="filter0_ddd"
          x="1"
          y="0"
          width="18"
          height="20"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow"
            result="shape"
          />
        </filter>
      </defs> */}
    </svg>
  );
};
