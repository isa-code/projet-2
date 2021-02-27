import React from 'react';
import Header from '../components/Header';
import '../components/StyleGeneral.css'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Button from '@material-ui/core/Button';
import RandomCards from '../components/RandomCards';
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <div>
                <p> Composant à integrer et integrer dedans le titre</p>
                <h2 className='titleSection'>Random Top Trending</h2>
                <div className='contentCards'>
                    <RandomCards />
                    <RandomCards />
                    <RandomCards />
                </div>
            
                <Button
                    variant="contained"
                    color="default"
                    className="greyBtn allBtn"
                    startIcon={<SwapHorizIcon />}
                >Tout changer
                </Button>
                <Footer />
            </div>
        </>
    )
};

export default Home;