import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = ({ target: { name } }) => {
    if (name === 'good') {
      setGood(good + 1);
    } else if (name === 'bad') {
      setBad(bad + 1);
    } else if (name === 'neutral') {
      setNeutral(neutral + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? 0
      : Math.round((100 * good) / countTotalFeedback());
  };

  return (
    <>
      <Section
        title="Please leave Feedback"
        children={
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={leaveFeedback}
          />
        }
      />
      <Section
        title="Statistic"
        children={
          countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )
        }
      />
    </>
  );
};
