import styled from "styled-components"
import { mobile } from "../Responsive";

const Container = styled.div`
    width:100vw;
    height:100vh;
    background : linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url("https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") center;
     background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Wrapper = styled.div`
    padding:20px;
    width:40%;
    background-color:white;
    ${mobile({width:"75%"})}
`;
const Title = styled.h1`
    font-size:24px;
    font-weight:300;

`;
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px; 
    padding:10px;
`;
const Agreement = styled.span`
    font-size:12px;
    margin:20px 0px;

`;
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:#ffffff;
    cursor:pointer;
`;



const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder="Name.." />
                    <Input placeholder="Lasname..." />
                    <Input placeholder="Email..." />
                    <Input placeholder="Password..." />
                    <Input placeholder="Confirm Password..." />
                    <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRICVE POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
