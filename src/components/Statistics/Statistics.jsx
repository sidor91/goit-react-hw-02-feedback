import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  FeedbackVariant,
  TotalFeedbacks,
  PositivePercentrage,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad }) => {
  const total = (good + neutral + bad)
  const positive = Math.floor((100 / total) * good);
  return (
    <StatisticsWrapper>
      <FeedbackVariant>Good: {good}</FeedbackVariant>
      <FeedbackVariant>Neutral: {neutral}</FeedbackVariant>
      <FeedbackVariant>Bad: {bad}</FeedbackVariant>
      <TotalFeedbacks>Total: {total}</TotalFeedbacks>
      <PositivePercentrage>Positive feedback: {positive}%</PositivePercentrage>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
