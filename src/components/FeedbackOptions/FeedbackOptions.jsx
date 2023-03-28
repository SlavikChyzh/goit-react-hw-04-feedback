import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { OptionsButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => {
      return (
        <OptionsButton name={option} onClick={onLeaveFeedback} key={nanoid()}>
          {option}
        </OptionsButton>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
