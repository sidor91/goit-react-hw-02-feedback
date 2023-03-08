import PropTypes from 'prop-types';
import { ButtonsWrapper, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({
  options: { good, neutral, bad },
  onLeaveFeedback,
}) => {
  return (
    <ButtonsWrapper>
      <FeedbackButton name="good" onClick={onLeaveFeedback}>
        {good}
      </FeedbackButton>
      <FeedbackButton name="neutral" onClick={onLeaveFeedback}>
        {neutral}
      </FeedbackButton>
      <FeedbackButton name='bad' onClick={onLeaveFeedback}>{bad}</FeedbackButton>
    </ButtonsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;