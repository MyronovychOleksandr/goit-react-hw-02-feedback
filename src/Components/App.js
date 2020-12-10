import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

import s from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ((good * 100) / this.countTotalFeedback()).toFixed(0);
  };

  render() {
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions onHandleClick={this.onHandleClick} />
        </Section>
        <Section title="Statistics">
          {!!this.countTotalFeedback() ? (
            <Statistics
              options={{
                ...this.state,
                total: this.countTotalFeedback(),
                positivePercentage: this.countPositiveFeedbackPercentage(),
              }}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
