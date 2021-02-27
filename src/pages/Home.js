import React from 'react';
import Header from '../components/Header';
import InfoBtn from '../components/InfoBtn';
import '../components/StyleGeneral.css'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Button from '@material-ui/core/Button';
import RandomCards from '../components/RandomCards';

const Home =() => {
    return (
        <>
            <Header/>
            <div>
                <p> Composant à integrer et integrer dedans le titre</p>
                <h2 className='titleSection'>Random Top Trending</h2>
                <RandomCards/>
                <RandomCards/>
                <RandomCards/>
                <InfoBtn/>
                
                <Button 
                    variant="contained"
                    color="default"
                    className="greyBtn allBtn"
                    startIcon={<SwapHorizIcon />}
                    >Tout changer
                </Button>
                
            </div>
        </>
    )
};
  
export default Home;