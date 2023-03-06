import React from "react";
import {
  Header,
  ButtonsWrapper,
  FeedbackButton,
  AppWrapper,
  StatisticsHeader,
  FeedbackVariantsWrapper,
  FeedbackVariant,
  TotalFeedbacks,
  PositivePercentrage,
} from './FeedbackApp.styled';

export class FeedbackApp extends React.Component {
  state = {
    good: 0,
    neutral: 0,
      bad: 0,
      total: 0,
    positive: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
      this.countTotalFeedback();
  };
  handleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
      this.countTotalFeedback();
  };
  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
      this.countTotalFeedback();
  };

    countTotalFeedback = () => {
        this.setState(prevState => {
            return {
                total: prevState.total + 1,
            };
        })
       this.countPositiveFeedbackPercentage();
  };

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => ({
            positive: Math.floor(100/prevState.total*prevState.good),
        }));
  };

  render() {
    return (
      <AppWrapper>
        <Header>Please leave a feedback</Header>
        <ButtonsWrapper>
          <FeedbackButton onClick={this.handleGoodFeedback}>
            Good
          </FeedbackButton>
          <FeedbackButton onClick={this.handleNeutralFeedback}>
            Neutral
          </FeedbackButton>
          <FeedbackButton onClick={this.handleBadFeedback}>Bad</FeedbackButton>
        </ButtonsWrapper>
        <StatisticsHeader>Statistics</StatisticsHeader>
        <FeedbackVariantsWrapper>
          <FeedbackVariant>Good: {this.state.good}</FeedbackVariant>
          <FeedbackVariant>Neutral: {this.state.neutral}</FeedbackVariant>
          <FeedbackVariant>Bad: {this.state.bad}</FeedbackVariant>
          <TotalFeedbacks>Total: {this.state.total}</TotalFeedbacks>
          <PositivePercentrage>
            Positive feedback: {this.state.positive}%
          </PositivePercentrage>
        </FeedbackVariantsWrapper>
      </AppWrapper>
    );
  }
}