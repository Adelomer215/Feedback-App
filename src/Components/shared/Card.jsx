import propTypes from "prop-types";
import { useState } from "react";

const Card = ({ children, reverse }) => {
  const [reverseStyle, setReverseStyle] = useState(reverse);

  const handleReverseStyle = () => {
    setReverseStyle((prev) => !prev);
  };
  return (
    <div
      className={`card ${reverseStyle && "reverse"}`}
      onClick={handleReverseStyle}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false
};
Card.propTypes = {
  children: propTypes.node.isRequired,
  reverse: propTypes.bool
};
export default Card;
