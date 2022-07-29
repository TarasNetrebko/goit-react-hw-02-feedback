import PropTypes from "prop-types"
import styled from "styled-components"

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
const Container = styled.div`
  min-width: 215px;
`
const Button = styled.button`
  margin-right: 10px;
`