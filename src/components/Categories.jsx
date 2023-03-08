import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import image_002 from '../images/image_002.webp'
import image_003 from '../images/image_003.webp'
import image_004 from '../images/image_004.webp'


const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;

    @media (max-width: 425px) {
      flex-direction: column;
      padding:0px;
    }
`;


const Categories = () => {
  return (
    <Container>
        
            <CategoryItem id='1' img={image_002} title='Beer'/>
            <CategoryItem id='2' img={image_003} title='Whiskey'/>
            <CategoryItem id='3' img={image_004} title='Vodka'/>
        
    </Container>
  )
}

export default Categories