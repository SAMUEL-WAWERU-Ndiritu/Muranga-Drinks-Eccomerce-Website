import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Add,Remove} from '@material-ui/icons'
import image_030 from '../images/image_030.webp'
import image_012 from '../images/image_012.webp'




const Container =styled.div``;

const Wrapper =styled.div`
    padding:20px;
    @media (max-width: 425px) {
        padding:10px;
      }
    
   
`;

const Title =styled.h1`
   font-weight:300;
   text-align:center; 
`;

const Top =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;

const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type === 'filled' && 'none'};
    background-color:${props=>props.type === 'filled' ? 'black': 'transparent'};
    color:${props=>props.type === 'filled' && 'white'};
`;
const TopTexts =styled.div`
    @media (max-width: 425px) {
        display:none;
    }
 
`;
const TopText = styled.span`
    cursor:pointer;
    text-decoration:underline;  
    margin:0px 10px;
`;

const Bottom =styled.div`
    display:flex;
    justify-content:space-between;
    @media (max-width: 425px) {
        flex-direction:column;
    };
`;
const Info =styled.div`
    flex:3;

`;

const Product = styled.div`
    display:flex;
    justify-content:space-between;
    @media (max-width: 425px) {
        flex-direction:column;
    };
    
`;

const ProductDetail = styled.div`
    flex:2;
`;

const Image = styled.img`
    width:200px;
`;

const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;  
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=> props.color}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;
const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    @media (max-width: 425px) {
        margin:5px 15px;
    };
  
`;
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
    @media (max-width: 425px) {
        margin-bottom:20px;
    };
    
`;
 const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px; 
 `;


const Summary =styled.div`
    flex:1; 
    border:0.5px solid lightgray; 
    border-radius:10px;
    padding:20px;
    height:50vh;  
`;
const SummaryTitle = styled.h1`
    font-weight:200;
`;
const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type==='total'&& "500"};
    font-size:${props=>props.type==='total'&& "24px"}
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width:100%'
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`;



const Cart = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        
        <Wrapper>
            <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={image_030}/>
                                <Details>
                                    <ProductName><b>Product:</b>Vodka</ProductName>
                                    <ProductId><b>ID:444444</b></ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>

                            </ProductDetail>


                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                        <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>

                                <ProductPrice>$ 30</ProductPrice>

                            </PriceDetail>


                        </Product>

                        <Hr/>

                        <Product>
                            <ProductDetail>
                                <Image src={image_012}/>
                                <Details>
                                    <ProductName><b>Product:</b>Chivas Regal</ProductName>
                                    <ProductId><b>ID:444444</b></ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>

                            </ProductDetail>


                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                        <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>

                                <ProductPrice>$ 30</ProductPrice>

                            </PriceDetail>


                        </Product>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discounts</SummaryItemText>
                            <SummaryItemPrice>$ 40</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 780</SummaryItemPrice>
                        </SummaryItem>

                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
        </Wrapper>
        <Footer/>
        
    </Container>
  )
}

export default  Cart