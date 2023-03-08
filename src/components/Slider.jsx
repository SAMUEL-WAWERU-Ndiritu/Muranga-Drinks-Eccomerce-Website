import React, { useState } from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons'
import SingleSider from './SingleSider';
import image_003 from '../images/image_003.webp'
import image_004 from '../images/image_004.webp'
import image_007 from '../images/image_007.webp'

const Container = styled.div`
     width:100%;
     height:70vh;
     display:flex;
     position:relative;
     margin-top:40px;
     padding-bottom:100px;
     margin-bottom:20px;
     overflow:hidden;
     @media (max-width: 425px) {
        display:none;
      }
    
    
    
`;
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=>props.direction ==='left' && '10px'};
    right:${props=>props.direction ==='right' && '10px'};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`;
const Wrapper= styled.div`
    height:100%;
    display:flex;
    margin-bottom:10px;
    transition:all 1.5s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw)
`;


const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick= {()=>{handleClick("left")}}>
            <ArrowLeftOutlined />
        </Arrow>
  
      
        <Wrapper slideIndex={slideIndex}>
            <SingleSider id='1' img={image_004} title= "SOFT DRINKS" bg= '#f5fafd'  desc= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, possimus."/>
            <SingleSider id= '2'  img={image_003} title= "DISCOUNT & OFFERS"  bg='#fcf1ed' desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, possimus."/>
            <SingleSider  id= '3'  img={image_007}  title="POPULAR SALE" bg= '#fbf0f4'  desc= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, possimus."/>
        </Wrapper>


        <Arrow direction="right" onClick= {()=>{handleClick("right")}}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider