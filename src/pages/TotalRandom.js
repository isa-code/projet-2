import React from 'react';
import Header from '../components/Header';
import RandomCards from '../components/RandomCards'
import Footer from '../components/Footer'
import '../components/StyleGeneral.css'

const TotalRandom = () => {
    return (
        <>
            <Header />
            <p> Composant à integrer et integrer dedans le titre</p>
            <h2 className='titleSection'>Total Random</h2>
            <RandomCards />
            <Footer />

        </>
    )
};

export default TotalRandom;