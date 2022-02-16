import { useState } from "react";

import Button from "../shared/Button";
import Card from "../shared/Card";
import RatingSelect from "../ratingSelect/RatingSelect";

const FeedBackForm = ({ addFeedBack, feedBackData }) => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    setText((prev) => {
      if (e.target.value.trim().length >= 10) {
        setBtnDisabled((prev) => (prev = false));
        setMessage(null);
      } else {
        setBtnDisabled((prev) => (prev = true));
        setMessage(
          (prev) => (prev = "the length should be greater than or equal to 10")
        );
      }
      return (prev = e.target.value);
    });
  };

  const changeRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedBack = {
      text,
      rating,
      id: feedBackData.length + 1
    };
    addFeedBack(newFeedBack);
    setText("");
    setBtnDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How you rating your service</h2>
        <RatingSelect selectValue={changeRating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Save
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
