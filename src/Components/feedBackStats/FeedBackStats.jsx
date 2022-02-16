const FeedBackStats = ({ feedBackData }) => {
  const total = feedBackData.length;
  let average =
    feedBackData.reduce((acc, acu) => {
      return acc + acu.rating;
    }, 0) / total;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>Total items: {total}</h4>
      <p>The Average: {!isNaN(average) ? average : 0}</p>
    </div>
  );
};

export default FeedBackStats;
