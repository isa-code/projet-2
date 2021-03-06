import React from 'react';
import Header from '../components/Header';
import '../components/StyleGeneral.css'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Button from '@material-ui/core/Button';
import RandomCards from '../components/RandomCards';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const Home = () => {

    const [favFilms, setFavFilms] = useState([]);

    function addFavorite(film) {
        setFavFilms(favFilms => [...favFilms, film]);
        console.log(favFilms)
    }
    return (
        <>
            <Header />
            <div>
                <h2 className='titleSection'>Random Top Trending</h2>
                <div className='contentCards'>
                    <RandomCards addFavorite={(film)=>addFavorite(film)} />
                    <RandomCards addFavorite={(film)=>addFavorite(film)} />
                    <RandomCards addFavorite={(film)=>addFavorite(film)} />
                </div>

                <Button
                    variant="contained"
                    color="default"
                    className="greyBtn allBtn"
                    startIcon={<SwapHorizIcon />}
                >Tout changer
                </Button>
                {
                    favFilms.length != 0 &&
                    favFilms.map(film => (
                        <div key={film.id}>
                            <p>{film.original_title}</p>
                            <img src={'https://image.tmdb.org/t/p/w500/'+film.poster_path} />
                        </div>
                    ))
                }

                <Footer />
            </div>
        </>
    )
};

export default Home;