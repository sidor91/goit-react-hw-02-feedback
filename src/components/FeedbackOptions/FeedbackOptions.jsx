import PropTypes from 'prop-types';
import { ButtonsWrapper, FeedbackButton } from './FeedbackOptions.styled';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <ButtonsWrapper>
      {options.map((option, index) => (
        <FeedbackButton name={option} onClick={onLeaveFeedback} key={index}>
          {capitalizeFirstLetter(option)}
        </FeedbackButton>
      ))}
    </ButtonsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;