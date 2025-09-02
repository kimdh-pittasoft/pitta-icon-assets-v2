import React from "react";
import { GoogleMapProps } from "../constants/Types";

export const ParkingMarker = ({
  $hover,
  $getDimensions,
  $dimensionKey,
  $geoService,
  $onMouseAllow,
  $prerender,
  lat,
  lng,
  ...props
}: React.SVGProps<SVGSVGElement> & { htmlColor?: string } & GoogleMapProps) => {
  return (
    <svg height="38" width="34" viewBox="0 0 34 38" {...props}>
      <g filter="url(#filter0_d)">
        <path
          d="M28.5 16C28.5 21.0064 25.3006 25.2668 20.8334 26.8458C20.2503 27.0518 19.8004 27.5224 19.4415 28.0165C19.0913 28.4986 18.7805 29.0716 18.497 29.5942C18.4864 29.6137 18.4758 29.6332 18.4653 29.6526C18.1632 30.2093 17.8952 30.6954 17.6187 31.0457C17.3321 31.4088 17.1337 31.5 17 31.5C16.8667 31.5 16.6705 31.41 16.387 31.0486C16.1131 30.6993 15.8483 30.2148 15.548 29.6581L15.5247 29.615C15.2407 29.0885 14.9281 28.509 14.5724 28.0209C14.2105 27.5245 13.7566 27.0543 13.1666 26.8458C8.69938 25.2668 5.5 21.0064 5.5 16C5.5 9.64873 10.6487 4.5 17 4.5C23.3513 4.5 28.5 9.64873 28.5 16Z"
          fill={props.htmlColor || "#0095E0"}
          stroke="white"
        />
        <path
          d="M18.0417 10.625H14.25V20.375H16.4167V17.125H18.0417C19.8346 17.125 21.2917 15.6679 21.2917 13.875C21.2917 12.0821 19.8346 10.625 18.0417 10.625ZM18.15 14.9583H16.4167V12.7917H18.15C18.7458 12.7917 19.2333 13.2792 19.2333 13.875C19.2333 14.4708 18.7458 14.9583 18.15 14.9583Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="34"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${props.htmlColor ? parseInt(props.htmlColor.slice(1,3), 16)/255 : 0} 0 0 0 0 ${props.htmlColor ? parseInt(props.htmlColor.slice(3,5), 16)/255 : 0.584314} 0 0 0 0 ${props.htmlColor ? parseInt(props.htmlColor.slice(5,7), 16)/255 : 0.878431} 0 0 0 0.45 0`}
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
