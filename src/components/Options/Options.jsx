import css from "../Options/Options.module.css";
import clsx from "clsx";

export default function Options({ feedbacksValue, onClick }) {
  return (
    <div>
      <button type="button" onClick={() => onClick("good")}>
        Good
      </button>
      <button type="button" onClick={() => onClick("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onClick("bad")}>
        Bad
      </button>
      <button
        type="button"
        // onReset={onReset}
        className={clsx(
          css.resetBtn,
          feedbacksValue == 0 ? css.isHidden : css.isDisplayed
        )}>
        Reset
      </button>
    </div>
  );
}
