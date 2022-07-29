import React from "react"
import { Feedback } from "components/FeedBack/FeedBack";

const feedbackState = {
  good: 0,
  neutral: 0,
  bad: 0
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback good={feedbackState.good} neutral={feedbackState.neutral} bad={feedbackState.bad} />
    </div>
  );
};
