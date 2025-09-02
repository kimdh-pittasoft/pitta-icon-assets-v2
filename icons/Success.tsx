import React from "react";

export const SuccessIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg viewBox="0 0 108 108" {...props}>
      <circle cx="54" cy="54" r="52.5" fill="none" stroke={props.htmlColor || "#0095E0"} strokeWidth="3" />
      <path
        d="M47.0499 63.8919C47.4404 64.2824 48.0735 64.2824 48.4641 63.8919L75.9135 36.4425C76.304 36.0519 76.9372 36.0519 77.3277 36.4425L79.745 38.8597C80.1355 39.2502 80.1355 39.8834 79.745 40.2739L48.4641 71.5548C48.0735 71.9454 47.4404 71.9453 47.0499 71.5548L33.2659 57.7709C32.8754 57.3804 32.8754 56.7472 33.2659 56.3567L35.6832 53.9395C36.0737 53.5489 36.7069 53.5489 37.0974 53.9395L47.0499 63.8919Z"
        fill={props.htmlColor || "#0095E0"}
      />
    </svg>
  );
};
