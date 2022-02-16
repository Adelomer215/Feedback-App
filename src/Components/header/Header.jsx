import propTypes from "prop-types";

const Header = ({ text, bgColor, color }) => {
  const style = {
    backgroundColor: bgColor,
    color: color
  };
  return (
    <header style={style} className="text-center">
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "FeedBack UI",
  bgColor: "rgba(0,0,0,0.4)",
  color: "#ff6a95"
};

Header.propTypes = {
  text: propTypes.string,
  BackgroundColor: propTypes.string,
  color: propTypes.string
};
export default Header;
