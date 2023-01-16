import "./right_arrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function right_arrow() {
  return (
      <FontAwesomeIcon className="right-arrow" icon={faAngleRight} />
  );
}
