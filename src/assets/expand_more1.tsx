import "./expand_more1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Expand_more1() {
  return (
    <div className="expand_more-1-expand_more">
      <FontAwesomeIcon className="exp_more1" icon={faAngleDown} />

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="exp_more1">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
      </svg> */}

      {/* <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_886"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <rect width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1_886)">
          <path
            d="M 10 13.062 L 5 8.062 L 6.062 7 L 10 10.938 L 13.938 7 L 15 8.062 L 10 13.062 Z"
            fill="black"
            fillOpacity="0.54"
           />
        </g>
      </svg> */}

    </div>
  );
}
