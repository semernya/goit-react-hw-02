import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import "./App.css";
    
export default function App() {
  const [optionsObj, setOptionsObj] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setOptionsObj({
      ...optionsObj,
      [feedbackType]: optionsObj[feedbackType] + 1,
    });
  };

  return (
    <div>
      <Description />
      <Options onClick={updateFeedback} />
      <Feedback />
    </div>
  );
}
