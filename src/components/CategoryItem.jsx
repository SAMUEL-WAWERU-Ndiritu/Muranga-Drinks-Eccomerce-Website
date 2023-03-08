import React from 'react'
import styled  from 'styled-components'

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
`;
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    @media (max-width: 425px) {
        height:20vh;
      }

    
`;
const Info =  styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`;
const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight:600;
`;

   
const CategoryItem = (props) => {
  return (
    <Container>
        <Image src={props.img}/>
        <Info>
            <Title>{props.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>

    </Container>
  )
}

export default CategoryItem 