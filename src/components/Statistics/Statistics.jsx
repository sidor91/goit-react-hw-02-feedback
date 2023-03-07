import {
    StatisticsWrapper,
    FeedbackVariant,
    TotalFeedbacks,
    PositivePercentrage,
} from './Statistics.styled';


export const Statistics = ({good,neutral,bad,total,positive}) => {
    return (
      <StatisticsWrapper>
          <FeedbackVariant>Good: {good}</FeedbackVariant>
          <FeedbackVariant>Neutral: {neutral}</FeedbackVariant>
          <FeedbackVariant>Bad: {bad}</FeedbackVariant>
          <TotalFeedbacks>Total: {total}</TotalFeedbacks>
          <PositivePercentrage>
            Positive feedback: {positive}%
          </PositivePercentrage>
        </StatisticsWrapper>
    );
}
