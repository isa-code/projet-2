import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
import '../components/StyleGeneral.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './Filtre.css';
import axios from 'axios';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

import Footer from '../components/Footer'

const Filtre = () => {

    const [selectedButton, setSelectedButton] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Aventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comédie" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentaire" },
        { id: 18, name: "Drame" },
        { id: 10751, name: "Familial" },
        { id: 14, name: "Fantastique" },
        { id: 36, name: "Histoire" },
        { id: 27, name: "Horreur" },
        { id: 10402, name: "Musique" },
        { id: 9648, name: "Mystère" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science-Fiction" },
        { id: 10770, name: "Téléfilm" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "Guerre" },
        { id: 37, name: "Western" }
    ];

    const handleClick = (id, event) => {
        //verifie si le genre est active et l"efface ou l'ajout dans le tableau de selectedGenres
        if (selectedGenres.includes(id)) {
            const selectId = selectedGenres.indexOf(id);
            selectedGenres.splice(selectId, 1);
            event.target.style.backgroundColor = 'gray';
        } else {
            selectedGenres.push(id);
            event.target.style.backgroundColor = '#EFEFEF';
        }
        console.log(selectedGenres);
    }
    const restarGenres = () => {
        setSelectedGenres([]);
        setSelectedButton(true);
    }

    return (
        <>
            <div className='header'>

                <div>
                    <p className='slogan'>Trouve ton film sans perdre de temps</p>
                    <Link to={'/'}>
                        <img src={Logo} alt='logo Mov(i)e Tender' />
                    </Link>
                </div>
                <Link to={'/totalRandom'}>
                    <Button
                        color="secondary"
                        variant="contained"
                        className="redBtn allBtn"
                    >Total Random
                    </Button>
                </Link>
            </div>
            <h2 className='titleSection'>Filtre</h2>
            <div className='filtreContent'>
                <div className='filtreSection'>
                    <p>Genres</p>
                    <div className="MuiChip-label">
                        {
                            genres.map((genre) => (
                                <button
                                    className='chip'
                                    style={{ backgroundColor: selectedButton != true && 'gray' }}
                                    onClick={(event) => handleClick(genre.id, event)}
                                >{genre.name}</button>

                            ))}

                    </div>
                    <Button
                        className="buttonText"
                        startIcon={<ClearIcon />}
                        onClick={restarGenres}
                    >Recomencer</Button>
                </div>

                <Footer />

            </div>
            {

                console.log(selectedGenres)
            }
        </>
    )
};

export default Filtre;