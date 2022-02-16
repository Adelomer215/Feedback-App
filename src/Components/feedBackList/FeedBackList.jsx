import FeedBackItems from "../feedBackItems/FeedBackItems";

const FeedBackList = ({ feedBackData, deleteFeedBack, handleReverse }) => {
  if (feedBackData.length === 0 || feedBackData === undefined) {
    return (
      <>
        <p>There is no feedback Yet</p>
        <button className="btn btn-danger" onClick={handleReverse}>
          back
        </button>
      </>
    );
  }
  const handleId = (id) => {
    deleteFeedBack(id);
  };
  return (
    <div className="feedback-list">
      {feedBackData.map((feedBackItem, idx) => {
        return (
          <FeedBackItems
            key={idx}
            rating={feedBackItem.rating}
            text={feedBackItem.text}
            id={feedBackItem.id}
            handleId={handleId}
          />
        );
      })}
    </div>
  );
};

export default FeedBackList;
