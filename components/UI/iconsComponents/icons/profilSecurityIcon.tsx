import React, { FunctionComponent } from "react";

const ProfilSecurityIcon: FunctionComponent<IconProps> = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.79804 11.5358C2.86951 10.7621 2.76634 8.96329 2.83082 8.50119L2.82126 8.25666C2.79102 7.49453 2.76088 6.73519 2.83079 5.59327C2.90816 4.3295 3.7123 3.43114 4.10994 3.30218C4.50679 3.15788 5.13577 2.90526 5.74389 2.66101L5.7439 2.66101C6.22266 2.46872 6.6885 2.28162 7.01798 2.15665C7.76595 1.87295 8.76537 2.03843 9.04479 2.15664C9.30718 2.2511 9.82018 2.46394 10.4086 2.70807L10.4086 2.70808L10.4087 2.7081C11.0252 2.96391 11.7246 3.25408 12.3053 3.47842C13.4247 3.9109 13.3855 5.60221 13.3739 6.10197L13.3734 6.12199V9.18237C13.3734 10.4204 12.7501 11.2672 12.4385 11.5358C12.2269 11.6956 11.9221 11.994 11.5645 12.3442L11.5645 12.3442C11.032 12.8656 10.3824 13.5017 9.74977 13.9646C8.69228 14.7383 7.14909 14.5298 6.66549 14.2289C6.35161 14.0103 5.83774 13.4977 5.28614 12.9474C4.7801 12.4426 4.2423 11.906 3.79804 11.5358ZM8.10499 4.31854C7.61229 4.31854 6.62688 4.84021 6.62688 5.8274C6.62688 6.87896 7.13197 7.73628 8.08247 7.76736H8.12301H8.15454H8.16355C8.59769 7.76736 9.57859 6.88155 9.5831 5.82999C9.5831 4.7577 8.59769 4.31854 8.10499 4.31854ZM9.07444 11.5993C10.2715 11.7156 11.5543 11.8402 11.5543 10.5938C11.5543 9.97888 11.1067 9.54261 10.6183 9.15598C9.23976 8.05647 6.98118 8.05647 5.59245 9.15598C5.1092 9.54261 4.65646 10.0558 4.65646 10.5938C4.65646 11.8402 5.93923 11.7156 7.13632 11.5993C7.47676 11.5662 7.81027 11.5338 8.10538 11.5338C8.40049 11.5338 8.734 11.5662 9.07444 11.5993Z"
        fill={color}
      />
    </svg>
  );
};

export default ProfilSecurityIcon;
