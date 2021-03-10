import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../components/StyleGeneral.css'
import RandomTotalCards from '../components/RandomTotalCards';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';


const TotalRandom = () => {

    const [restart, setRestart] = useState(false);

    return (
        <>
            <Header />
            <p> Composant à integrer et integrer dedans le titre</p>
            <h2 className='titleSection'>Total Random</h2>
            <div className='contentCards'>
                    <RandomTotalCards reset={restart} addFavorite={false} />
                    <RandomTotalCards reset={restart} addFavorite={false} />
                    <RandomTotalCards reset={restart} addFavorite={false} />
                </div>

                <Button
                    variant="contained"
                    color="default"
                    className="greyBtn allBtn toutChanger"
                    startIcon={<SwapHorizIcon />}
                    onClick={()=>setRestart(!restart)}
                >Tout changer
                </Button>
            <Footer />

        </>
    )
};

export default TotalRandom;