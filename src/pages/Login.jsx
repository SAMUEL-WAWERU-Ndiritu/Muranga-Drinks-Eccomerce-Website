import React from 'react'

import styled from 'styled-components'
import logo from '../images/logo.jpg'

const Container = styled.div`79097
      width:100vh;
      height:100vh;
      background:linear-gradient(
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.5),
      ),
      url(${logo}) center;
      display:flex;
      justify-content:center;
      align-items:center;
      background-size:cover;
`;

const Wrapper = styled.div`
      width:25%;
      padding:20px;
      background-color:white;
      @media (max-width: 425px) {
            width:75%;
        };
     
`;

const Form = styled.form`
      display:flex;
      flex-direction:column;
            
`;

const Title = styled.h1`
      font-size:24px;
      font-weight:300;
`;

const Input = styled.input`
        min-width:40%;
        flex:1;
        margin:10px 0px;
        padding:10px;

`;

const Link= styled.a`
        margin:5px 0px;
        font-size:12px;
        text-decoration:underline;
        cursor:pointer;

`;

const Button = styled.button`
        width:40%;
        border:none;
        padding:15px 20px;
        background-color:teal;
        color:white;
        cursor:pointer;
        margin-bottom:10px;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>Login</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}
export default Login
