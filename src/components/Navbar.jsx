import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Search,ShoppingCartOutlined } from '@material-ui/icons'
import {Badge} from '@material-ui/core';



const Container = styled.div`
    height:60px;
    @media (max-width: 425px) {
        height:20vh;
        width:100%;
        padding:10px;
        display:flex;
        margin-bottom:30px;
      }

    
`;
const Wrapper  = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width: 425px) {
        padding:10px 0px;
      }

 
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    
`;
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    @media (max-width: 425px) {
        display:none;
      }
   
`;
const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`;

const Input = styled.input`
    border:none;
    @media (max-width: 425px) {
        width:50px;
      }
   

`;


const Center = styled.div`
    flex:1;
    text-align:center;
    justify-content:center;
    align-items:center;
`;
const Logo = styled.h1`
    font-weight:bold;
    width: 20vw;
    @media (max-width: 425px) {
        font-size:12px;
       
      }
   
   
`;


const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    @media (max-width: 425px) {
        justify-content:center;
        flex:2;
      }
    
`;
const MenuItem =styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    font-weight:500;
    @media (max-width: 425px) {
        font-size:12px;
        margin-left:10px;
      }
    
     
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                     <Input placeholder="Search"/>
                    <Search style={{color:"grey",fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>MURANG'A LIQUOR STORE</Logo>
            </Center>
            <Right>
                <MenuItem> <Link to='Register'>Register</Link></MenuItem>
                <MenuItem><Link to='Login'>Sign In</Link></MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary" >
                    <Link to='Cart'><ShoppingCartOutlined/></Link> 
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar