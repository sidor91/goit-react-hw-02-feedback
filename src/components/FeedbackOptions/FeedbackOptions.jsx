import {
  ButtonsWrapper,
  FeedbackButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options,
  onLeavePositiveFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <ButtonsWrapper>
      <FeedbackButton onClick={onLeavePositiveFeedback}>
        {options.good}
      </FeedbackButton>
      <FeedbackButton onClick={onLeaveNeutralFeedback}>
        {options.neutral}
      </FeedbackButton>
      <FeedbackButton onClick={onLeaveBadFeedback}>
        {options.bad}
      </FeedbackButton>
    </ButtonsWrapper>
  );
};
