import styled from "styled-components";
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
    width:20%;
    background-color:white;
    ${mobile({width:"75%"})}
`;
const Title = styled.h1`
    font-size:24px;
    font-weight:300;

`;
const Form = styled.form`
    display:flex;
    flex-direction:column;
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px;
`;
const Link = styled.a`
    font-size:12px;
    margin:5px 0px;
    text-decoration:underline;
    cursor:pointer;

`;
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:#ffffff;
    cursor:pointer;
    margin-bottom:10px;
`;


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Login Account</Title>
                <Form>
                    <Input placeholder="Email..." />
                    <Input placeholder="Password..." />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
