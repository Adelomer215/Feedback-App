import propTypes from "prop-types";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false,
  version: "primary",
  type: "button"
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.string,
  isDisabled: propTypes.bool,
  version: propTypes.string
};

export default Button;
