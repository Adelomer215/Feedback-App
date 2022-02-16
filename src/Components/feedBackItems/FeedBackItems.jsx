import Card from "../shared/Card";
import { FaTimes } from "react-icons/fa";

const FeedBackItems = ({ rating, text, id, handleId }) => {
  const handleClick = (id) => {
    handleId(id);
  };
  return (
    <Card>
      <p className="num-display">{rating}</p>
      <button className="close" onClick={() => handleClick(id)}>
        <FaTimes color="purple" />
      </button>
      <p className="text-display">{text}</p>
    </Card>
  );
};

export default FeedBackItems;
