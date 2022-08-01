import PropTypes from "prop-types"
import {Container, Button} from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateArray = [];
  for (const key in options) {
    stateArray.push(key);
          }
    return (
      <Container>
        {stateArray.map((but, index) => <Button type="button" onClick={onLeaveFeedback} key={index}>
            {but}
          </Button>)}
        </Container>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  })
}
