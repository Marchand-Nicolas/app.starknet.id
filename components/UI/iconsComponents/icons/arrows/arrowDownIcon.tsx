import React, { FunctionComponent } from "react";

const ArrowDownIcon: FunctionComponent<IconProps> = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M6.82482 2.20877C6.65043 4.21048 6.75215 8.60313 6.82482 10.5492C6.09821 10.0627 4.4706 9.04794 3.77305 8.88108C2.90112 8.6725 2.68314 9.71512 3.55507 10.1321C4.427 10.5492 6.17087 12.8428 7.0428 14.3024C7.91473 15.762 9.00464 14.5109 9.00464 14.3024C9.00464 14.0939 10.7485 11.3833 11.8384 10.9663C12.9283 10.5493 13.5823 9.08966 12.2744 9.08966C10.9665 9.08966 9.22263 11.3833 9.00464 10.9663C8.83026 10.6326 8.78666 4.98893 8.78666 2.20877C8.78666 1.78406 8.66526 1 7.66736 1C7.26305 1 6.89726 1.37726 6.82482 2.20877Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownIcon;
