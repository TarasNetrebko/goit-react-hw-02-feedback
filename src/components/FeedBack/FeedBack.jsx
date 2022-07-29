import React, { Component } from 'react';
import PropTypes from "prop-types"
import { Statisctics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export class Feedback extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  increaseFeedbackCount = e => {
    const targetStat = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return { [targetStat]: prevState[targetStat] + 1 };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    return this.state.good > 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  }
  render() {
    return (
      <>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions onLeaveFeedback={this.increaseFeedbackCount} />
          }
        />
        <Section
          title={'Statistics'}
          children={
            <Statisctics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        />
      </>
    );
  }
}
