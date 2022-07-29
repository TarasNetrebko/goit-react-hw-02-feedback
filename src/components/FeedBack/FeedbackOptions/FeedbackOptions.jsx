import PropTypes from "prop-types"
import {Container, Button} from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Container>
          <Button type="button" onClick={onLeaveFeedback}>
            Good
          </Button>
          <Button type="button" onClick={onLeaveFeedback}>
            Neutral
          </Button>
          <Button type="button" onClick={onLeaveFeedback}>
            Bad
          </Button>
        </Container>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}
