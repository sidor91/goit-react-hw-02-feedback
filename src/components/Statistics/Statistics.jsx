import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  FeedbackVariant,
  TotalFeedbacks,
  PositivePercentrage,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
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
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};