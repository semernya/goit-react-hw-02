// import css from "./Feedback.module.css";

export default function Feedback({ goodValue, neutralValue, badValue}) {

  return (
      <div>
      <p>Good: {goodValue}</p>
      <p>Neutral: {neutralValue}</p>
      <p>Bad: {badValue}</p>
    </div>
  );
}
