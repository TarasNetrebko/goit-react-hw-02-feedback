import PropTypes from "prop-types"
import {Container, Button} from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Container>
          {options.map(but => <Button type="button" onClick={onLeaveFeedback}>
            {but}
          </Button>)}
        </Container>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}
