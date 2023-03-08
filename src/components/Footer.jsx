import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Facebook,Instagram,Twitter,Pinterest,Room,Phone,MailOutline } from '@material-ui/icons'


const Container = styled.div`
    display:flex;
    @media (max-width: 425px) {
        flex-direction:column;
        text-align:center;
      }

`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;


const Logo =  styled.h1`
      font-size:30px;
      @media (max-width: 425px) {
        font-size:30px;
      }

`;


const Desc =  styled.p`
    margin:20px 0px
`;


const SocialContainer =  styled.div`
    display:flex;
`;


const SocialIcon =  styled.div`
    width:40px;
    height:40px;
    border-radius:50%
    color: ${props=>props.color};
    display:center;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;

const Center = styled.div`
    flex:1;
    padding:20px;
    @media (max-width: 425px) {
        display: none;
      }
`;

const Tittle= styled.h3`
    margin-bottom:30px;
`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;
const ListItem= styled.li`
    width: 50%;
    margin-bottom:10px;
`;



  
const Right = styled.div`
    flex:1;
    padding:20px;
    @media (max-width: 425px) {
        backgroundColor:#fff8f8
      }
`;

const ContactItem = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MURANG'A LIQOUR STORE.</Logo>
            <Desc>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas illo animi nesciunt libero, magni debitis minus fugit doloribus eum ex cum labore iste alias itaque ipsa maxime accusantium dolor? 
            </Desc>
            <SocialContainer>
                <SocialIcon color="#3B5999">
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color="#E4405f">
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color="#55ACEE">
                    <Twitter/>
                </SocialIcon>

                <SocialIcon color="#E60023">
                    <Pinterest/>
                </SocialIcon>

            </SocialContainer>

        </Left>
        <Center>
            <Tittle>Useful Links</Tittle>
            <List>
                <ListItem><Link to='/'>Home</Link></ListItem>
                <ListItem><Link to='Login'>Login</Link></ListItem>
                <ListItem><Link to='Register'>Register</Link></ListItem>
                <ListItem><Link to='Cart'>Cart</Link></ListItem>
                <ListItem> <Link to='Product'>Product</Link></ListItem>
                <ListItem><Link to='ProductList'>Product List</Link></ListItem>
                <ListItem>ORDER REACKING</ListItem>
                <ListItem>WISHLIST</ListItem>
                <ListItem>TERMS</ListItem>
            </List>

        </Center>
        <Right>
            <Tittle>Contact</Tittle>
            <ContactItem>
               <Room style={{marginRight:"10px"}}/> 622 Mukuyu-Muranga Road
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +254 74151592
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight:"10px"}}/> samuel@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer