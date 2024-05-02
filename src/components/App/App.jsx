import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import "./App.css";

export default function App() {
  const [optionsObj, setOptionsObj] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = optionsObj.good + optionsObj.neutral + optionsObj.bad;

  const updateFeedback = (feedbackType) => {
    setOptionsObj({
      ...optionsObj,
      [feedbackType]: optionsObj[feedbackType] + 1,
    });
  };



  return (
    <div>
      <Description />
      <Options
        feedbacksValue={totalFeedback}
        onClick={updateFeedback}
      />
      {totalFeedback == 0 ? (
        <Notification />
      ) : (
        <Feedback
        feedbacksValue={totalFeedback}
          goodValue={optionsObj.good}
          neutralValue={optionsObj.neutral}
          badValue={optionsObj.bad}
        />
      )}
    </div>
  );
}
