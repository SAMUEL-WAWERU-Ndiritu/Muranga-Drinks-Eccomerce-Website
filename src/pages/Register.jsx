import React from 'react'
import styled from 'styled-components'
import image_007 from '../images/image_007.webp'

const Container = styled.div`
      width:100vh;
      height:100vh;
      background:linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5),
        ),url(${image_007})center;
      display:flex;
      justify-content:center;
      align-items:center;
      background-size:cover;
      @media (max-width: 425px) {
        width:50vh;
    };

`;

const Wrapper = styled.div`
      width:40%;
      padding:20px;
      background-color:white;
      @media (max-width: 425px) {
        width:75%;
    };

   
`;

const Form = styled.form`
      display:flex;
      flex-wrap:wrap; 
      @media (max-width: 425px) {
        flex-direction:column;
    };
      
`;

const Title = styled.h1`
      font-size:24px;
      font-weight:300;
`;

const Input = styled.input`
        min-width:40%;
        flex:1;
        margin:20px 10px 0px 0px;
        padding:10px;
        @media (max-width: 425px) {
          width:75%;
          margin:0 auto;
      };

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
        color:white;
        cursor:pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By Creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register