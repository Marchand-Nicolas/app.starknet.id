import React, { FunctionComponent } from "react";

const RenewalIcon: FunctionComponent<IconProps> = ({ color, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 13 13"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2899 4.84719C10.1284 2.79743 7.6404 -0.0753518 3.51484 2.94169L4.46689 3.57686C4.62557 3.68272 4.84771 3.95796 4.46689 4.21203C4.08607 4.4661 2.19254 5.27064 1.29338 5.64116C1.02892 5.79995 0.500006 5.95874 0.500006 5.32357V1.67136C0.500006 1.40671 0.626947 0.94092 1.13471 1.19499C1.64247 1.44905 2.19254 1.93601 2.40411 2.14774C3.51484 0.877403 7.52205 -0.851837 10.1792 1.19499C12.3419 2.86088 12.4983 4.55619 12.4983 4.78793C12.4983 6.05964 11.5978 5.39053 11.2899 4.84719ZM1.70837 8.15273C2.86995 10.2025 5.3579 13.0753 9.48346 10.0582L8.53141 9.42306C8.37274 9.3172 8.15059 9.04196 8.53141 8.78789C8.91223 8.53382 10.8058 7.72928 11.7049 7.35877C11.9694 7.19997 12.4983 7.04118 12.4983 7.67635V11.3286C12.4983 11.5932 12.3714 12.059 11.8636 11.8049C11.3558 11.5509 10.8058 11.0639 10.5942 10.8522C9.48346 12.1225 5.47625 13.8518 2.8191 11.8049C0.65645 10.139 0.5 8.44373 0.5 8.21199C0.5 6.94028 1.40046 7.60939 1.70837 8.15273Z"
        fill={color}
      />
    </svg>
  );
};

export default RenewalIcon;