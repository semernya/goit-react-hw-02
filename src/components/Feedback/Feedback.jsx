// import css from "./Feedback.module.css";

export default function Feedback({ goodValue, neutralValue, badValue, onReset}) {

  return (
      <div onReset={() => onReset(0, 0, 0)}>
      <p>Good: {goodValue}</p>
      <p>Neutral: {neutralValue}</p>
      <p>Bad: {badValue}</p>
    </div>
  );
}
