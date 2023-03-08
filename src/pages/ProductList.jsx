import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';



const Container = styled.div`
   padding:10px;
`;

const Title = styled.h1`
    margin:50px;
    
`;
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;
const Filter = styled.div`
    margin:20px;
    @media (max-width: 425px) {
        margin:0px 20px;
        display:flex;
        flex-direction:column;
    };
   
`;

const FilterText= styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    @media (max-width: 425px) {
        margin-right:0px;
    };
    
`;

const Select = styled.select`
    padding:10px;
    margin-right:20px;
    @media (max-width: 425px) {
        margin:10px 0px;
    };

   
`;
const Option = styled.option``;


const ProductList = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        
        <Title>Drinks</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Price</Option>
                    <Option>Higher</Option>
                    <Option>Medium</Option>
                    <Option>Row</Option>
                </Select>
                <Select>
                    <Option disabled selected>Quantity</Option>
                    <Option>5 litle</Option>
                    <Option>3 little</Option>
                    <Option>2 little</Option>
                    <Option>1 little</Option>
                    <Option>500ml and below</Option>
                </Select>
                
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
               <Select>
                   <Option selected>Newest</Option>
                   <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select> 
                
            </Filter>

        </FilterContainer>
        <Products/>
        <Newsletter/> 
        <Footer/>

    </Container>
  )
}

export default ProductList