import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import '../components/StyleGeneral.css'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Button from '@material-ui/core/Button';
import RandomCards from '../components/RandomCards';

const Home =() => {

    const [favoriteFilm, setFavotireFilm] = useState([]);

    return (
        <>
            <Header/>
            <div>
                <h2 className='titleSection'>Random Top Trending</h2>
                <div className="contentCards">
                   <RandomCards addFavorite={(m)=>setFavotireFilm(m)}/>
                   <RandomCards addFavorite={(m)=>setFavotireFilm(m)}/>
                   <RandomCards addFavorite={(m)=>setFavotireFilm(m)}/>
                </div>
                {

                   console.log(favoriteFilm)
                }
                <Button 
                    variant="contained"
                    color="default"
                    className="greyBtn allBtn"
                    startIcon={<SwapHorizIcon />}
                    >Tout changer
                </Button>
                {
                    favoriteFilm.length !== 0 &&
                    <h2 className='titleSection'>Film favorites</h2>

                }
            </div>
        </>
    )
};
  
export default Home;