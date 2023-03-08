import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color:teal;
    height:30px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
    letter-spacing:1px;
`;

const Announcements = () => {
  return (
   <Container>
       Your Satisfaction is our priority
   </Container>
  )
}

export default Announcements