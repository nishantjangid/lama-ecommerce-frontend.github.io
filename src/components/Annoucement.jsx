import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight:500;
`

const Annoucement = () => {
    return (
        <div>
            <Container>
                Super Deal! Free shipping on orders over $50
            </Container>
        </div>
    )
}

export default Annoucement
