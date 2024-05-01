import "../Options/Options.module.css";

export default function Options({onClick}) {

  return (
    <div>
      <button type="button" onClick={onClick}>Good</button>
      <button type="button" onClick={onClick}>Neutral</button>
      <button type="button" onClick={onClick}>Bad</button>
    </div>
  );
}
