import * as React from "react"

export const ElectricBoltIcon = (props: React.SVGProps<SVGSVGElement> & { htmlColor?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
  
  <path d="M14.67,2.2c.16-.12.34-.19.56-.19s.39.08.52.23c.16.12.23.28.23.47.03.19-.02.36-.14.52l-4.83,6.75,8.06.8c.28.03.5.16.66.38.19.19.27.42.23.7,0,.25-.09.47-.28.66l-10.36,9.28c-.16.12-.34.19-.56.19s-.39-.08-.52-.23c-.16-.12-.25-.28-.28-.47,0-.19.06-.36.19-.52l4.83-6.75-8.06-.8c-.28-.03-.52-.14-.7-.33-.16-.22-.23-.45-.23-.7.03-.28.14-.52.33-.7L14.67,2.2Z" fill={props.htmlColor || "#888"} />
</svg>

  );
};
