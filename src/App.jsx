import { useState } from "react";

import Header from "./Components/header/Header";
import data from "./Components/data/data";
import FeedBackList from "./Components/feedBackList/FeedBackList";
import FeedBackStats from "./Components/feedBackStats/FeedBackStats";
import FeedBackForm from "./Components//feedBackForm/FeedBackForm";

const App = () => {
  const [feedBackData, setFeedBackData] = useState(data);
  const handleReverse = () => {
    setFeedBackData((prev) => (prev = data));
  };
  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete this")) {
      setFeedBackData((prev) => {
        return prev.filter((prev) => prev.id !== id);
      });
    }
  };
  const addFeedBack = (newFeed) => {
    setFeedBackData([...feedBackData, newFeed]);
    console.log(feedBackData);
    console.log(newFeed);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackForm addFeedBack={addFeedBack} feedBackData={feedBackData} />
        <FeedBackStats feedBackData={feedBackData} />
        <FeedBackList
          feedBackData={feedBackData}
          deleteFeedBack={deleteFeedBack}
          handleReverse={handleReverse}
        />
      </div>
    </>
  );
};
export default App;
