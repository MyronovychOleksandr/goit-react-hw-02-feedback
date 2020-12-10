import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onHandleClick }) => {
  return (
    <div>
      <button
        className={s.button}
        type="button"
        name="good"
        onClick={onHandleClick}
      >
        Good
      </button>
      <button
        className={s.button}
        type="button"
        name="neutral"
        onClick={onHandleClick}
      >
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        name="bad"
        onClick={onHandleClick}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
