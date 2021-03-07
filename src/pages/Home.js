import React from 'react';
import Header from '../components/Header';
import '../components/StyleGeneral.css'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Button from '@material-ui/core/Button';
import RandomCards from '../components/RandomCards';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import FavCardFilm from '../components/FavCardFilm';

const Home = () => {

    const [favFilms, setFavFilms] = useState([]);

    function addFavorite(film) {
        if (favFilms.includes(film)) {
            const selectId = favFilms.indexOf(film);
            favFilms.splice(selectId, 1);
        } else {
            setFavFilms(favFilms => [...favFilms, film]);
        }
        console.log(favFilms)
    }

    return (
        <>
            <Header />
            <div>
                <h2 className='titleSection'>Les plus populaires cette semaine</h2>
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
                    favFilms.length !== 0 &&
                    <h2 className='titleSection'>Coup de coeur</h2>
                }
                
                <div className='contentCards'>
                    {
                        favFilms.length !== 0 &&
                        
                        favFilms.map(film => (
                            <FavCardFilm 
                                key={film.id}
                                poster={'https://image.tmdb.org/t/p/w500/'+film.poster_path} 
                            />
                        ))
                    }

                </div>
               

                <Footer />
            </div>
        </>
    )
};

export default Home;