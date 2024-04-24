import { useState } from "react";
import css from "./Feedback.module.css";

export default function Feedback() {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);

  return (
    <div>
      <p>Good: {goodValue}</p>
      <p>Neutral: {neutralValue}</p>
      <p>Bad: {badValue}</p>
    </div>
  );
}
