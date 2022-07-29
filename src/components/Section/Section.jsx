import styled from "styled-components"

export const Section = ({ title, children }) => {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}

const Container = styled.div`
    min-width: 215px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
`
const Title = styled.b`
    margin-bottom: 20px;
`