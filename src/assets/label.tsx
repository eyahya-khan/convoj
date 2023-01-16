import "./label.css";

export default function Label2() {
  return (
    <div className="label">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_411"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <rect width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1_411)">
          <path
            d="M 17 10 L 13.458 14.438 C 13.305 14.618 13.128 14.757 12.927 14.854 C 12.726 14.951 12.507 15 12.271 15 H 5.5 C 5.083 15 4.729 14.854 4.438 14.562 C 4.146 14.271 4 13.917 4 13.5 V 6.5 C 4 6.083 4.146 5.729 4.438 5.438 C 4.729 5.146 5.083 5 5.5 5 H 12.271 C 12.507 5 12.726 5.049 12.927 5.146 C 13.128 5.243 13.305 5.382 13.458 5.562 L 17 10 Z M 15.083 10 L 12.271 6.5 H 5.5 V 13.5 H 12.271 L 15.083 10 Z"
            fill="black"
            fillOpacity="0.54"
           />
        </g>
      </svg>
    </div>
  );
}