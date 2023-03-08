import React from 'react'
import styled from 'styled-components'
const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color:${props=>props.bg}
`;
const ImgContainer = styled.div`
    flex:1;
    height:100%;
`;
const Image = styled.img`
    height:80%;
`;
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`;
const Title = styled.h1`
    font-size:70px;
`;
const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`;
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`;

const SingleSider = (props) => {
  return (
    <Slide bg={props.bg} key={props.id}>
                    <ImgContainer>
                        <Image src={props.img}/>
                    </ImgContainer>
        
                    <InfoContainer>
                        <Title>{props.title}</Title>
                        <Desc>{props.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                    </Slide>
  )
}

export default SingleSider