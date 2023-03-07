import PropTypes from 'prop-types';
import { ButtonsWrapper, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options: { good, neutral, bad },
  onLeavePositiveFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <ButtonsWrapper>
      <FeedbackButton onClick={onLeavePositiveFeedback}>{good}</FeedbackButton>
      <FeedbackButton onClick={onLeaveNeutralFeedback}>
        {neutral}
      </FeedbackButton>
      <FeedbackButton onClick={onLeaveBadFeedback}>{bad}</FeedbackButton>
    </ButtonsWrapper>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  onLeavePositiveFeedback: PropTypes.func.isRequired,
  onLeaveNeutralFeedback: PropTypes.func.isRequired,
  onLeaveBadFeedback: PropTypes.func.isRequired,
};