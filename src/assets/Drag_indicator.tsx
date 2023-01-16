import "./Drag_indicator.css";

export default function Drag_indicator() {
  return (
    <div className="drag-indicator">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_181"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <rect width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1_181)">
          <path
            d="M 7.5 16 C 7.083 16 6.729 15.854 6.438 15.562 C 6.146 15.271 6 14.917 6 14.5 C 6 14.083 6.146 13.729 6.438 13.438 C 6.729 13.146 7.083 13 7.5 13 C 7.917 13 8.271 13.146 8.562 13.438 C 8.854 13.729 9 14.083 9 14.5 C 9 14.917 8.854 15.271 8.562 15.562 C 8.271 15.854 7.917 16 7.5 16 Z M 12.5 16 C 12.083 16 11.729 15.854 11.438 15.562 C 11.146 15.271 11 14.917 11 14.5 C 11 14.083 11.146 13.729 11.438 13.438 C 11.729 13.146 12.083 13 12.5 13 C 12.917 13 13.271 13.146 13.562 13.438 C 13.854 13.729 14 14.083 14 14.5 C 14 14.917 13.854 15.271 13.562 15.562 C 13.271 15.854 12.917 16 12.5 16 Z M 7.5 11.5 C 7.083 11.5 6.729 11.354 6.438 11.062 C 6.146 10.771 6 10.417 6 10 C 6 9.583 6.146 9.229 6.438 8.938 C 6.729 8.646 7.083 8.5 7.5 8.5 C 7.917 8.5 8.271 8.646 8.562 8.938 C 8.854 9.229 9 9.583 9 10 C 9 10.417 8.854 10.771 8.562 11.062 C 8.271 11.354 7.917 11.5 7.5 11.5 Z M 12.5 11.5 C 12.083 11.5 11.729 11.354 11.438 11.062 C 11.146 10.771 11 10.417 11 10 C 11 9.583 11.146 9.229 11.438 8.938 C 11.729 8.646 12.083 8.5 12.5 8.5 C 12.917 8.5 13.271 8.646 13.562 8.938 C 13.854 9.229 14 9.583 14 10 C 14 10.417 13.854 10.771 13.562 11.062 C 13.271 11.354 12.917 11.5 12.5 11.5 Z M 7.5 7 C 7.083 7 6.729 6.854 6.438 6.562 C 6.146 6.271 6 5.917 6 5.5 C 6 5.083 6.146 4.729 6.438 4.438 C 6.729 4.146 7.083 4 7.5 4 C 7.917 4 8.271 4.146 8.562 4.438 C 8.854 4.729 9 5.083 9 5.5 C 9 5.917 8.854 6.271 8.562 6.562 C 8.271 6.854 7.917 7 7.5 7 Z M 12.5 7 C 12.083 7 11.729 6.854 11.438 6.562 C 11.146 6.271 11 5.917 11 5.5 C 11 5.083 11.146 4.729 11.438 4.438 C 11.729 4.146 12.083 4 12.5 4 C 12.917 4 13.271 4.146 13.562 4.438 C 13.854 4.729 14 5.083 14 5.5 C 14 5.917 13.854 6.271 13.562 6.562 C 13.271 6.854 12.917 7 12.5 7 Z"
            fill="black"
            fillOpacity="0.54"
           />
        </g>
      </svg>
    </div>
  );
}
