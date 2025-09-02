import React from "react";
import { GoogleMapProps } from "../constants/Types";

export const ParkingSelectedMarker = ({
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
    <svg height="42" width="38" viewBox="0 0 38 42" {...props}>
      <g filter="url(#filter0_d)">
        <path
          d="M32.5 17.7143C32.5 23.4606 28.7508 28.3588 23.5031 30.1757C22.8482 30.4025 22.3353 30.9237 21.9187 31.4855C21.513 32.0326 21.1524 32.6838 20.8209 33.2824C20.8089 33.3042 20.7969 33.3259 20.7849 33.3475C20.4332 33.9822 20.1176 34.5436 19.7904 34.9497C19.4543 35.3668 19.2007 35.5 19 35.5C18.7997 35.5 18.5487 35.3681 18.2162 34.9528C17.8919 34.5479 17.5801 33.9882 17.2306 33.3537L17.2044 33.3061C16.8723 32.7031 16.5096 32.0444 16.0975 31.4906C15.6777 30.9265 15.1601 30.4053 14.4969 30.1757C9.24924 28.3588 5.5 23.4606 5.5 17.7143C5.5 10.4259 11.5344 4.5 19 4.5C26.4656 4.5 32.5 10.4259 32.5 17.7143Z"
          fill={props.htmlColor || "#0095E0"}
          stroke="white"
        />
        <path
          d="M20.2153 11.5715H15.7917V22.7144H18.3194V19.0001H20.2153C22.307 19.0001 24.0069 17.3349 24.0069 15.2858C24.0069 13.2368 22.307 11.5715 20.2153 11.5715ZM20.3417 16.5239H18.3194V14.0477H20.3417C21.0368 14.0477 21.6055 14.6049 21.6055 15.2858C21.6055 15.9668 21.0368 16.5239 20.3417 16.5239Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="38"
          height="42"
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
