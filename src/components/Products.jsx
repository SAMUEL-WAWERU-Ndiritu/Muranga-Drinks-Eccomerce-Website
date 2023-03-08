import React from 'react'
import styled from 'styled-components'
import Product from './Product';
import image_004 from '../images/image_004.webp'
import image_005 from '../images/image_005.webp'
import image_006 from '../images/image_006.webp'
import image_007 from '../images/image_007.webp'
import image_008 from '../images/image_008.webp'
import image_009 from '../images/image_009.webp'
import image_010 from '../images/image_010.webp'
import image_003 from '../images/image_003.webp'
import {Link} from 'react-router-dom'



const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;

const Products = () => {
    
  return (
     <Container>
        <Link to='Product'><Product id='1' img={image_005}/></Link>
        <Link to='Product'><Product id='1' img={image_006}/></Link>
        <Link to='Product'><Product id='1' img={image_007}/></Link>
        <Link to='Product'><Product id='1' img={image_008}/></Link>
        <Link to='Product'><Product id='1' img={image_009}/></Link>
        <Link to='Product'><Product id='1' img={image_010}/></Link>
        <Link to='Product'><Product id='1' img={image_004}/></Link>
        <Link to='Product'><Product id='1' img={image_003}/></Link>
     </Container>
  )
}

export default Products