import React from 'react'
import Announcements from '../components/Announcements'
import styled from 'styled-components'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Container =styled.div``;

const Home = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Home