import { Favorite } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import ChoixFilmButton from "../components/ChoixFilmsButton.js";
import CardFilm from '../components/cardFilm';
import './RandomCards.css';
import Ranking5 from './Ranking5';
import Ranking4 from './Ranking4';
import Ranking3 from './Ranking3';
import Ranking2 from './Ranking2';
import Ranking1 from './Ranking1';
import SansRanking from './SansRanking';

const RandomCards = (props) => {

    const [data, setData] = useState([]);
    const [randomFilm, setRandomFilm] = useState([]);
    const randomNum = Math.floor(Math.random() * 21);
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

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=2f5db99c0d99450f670eee04fca7d32c')
            .then((resp) => resp.json())
            .then((data) => { setData(data.results)})
    }, [])

    const fetchMovieAgain = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0eb1560cadbbc71b973ed8f868ef57fa&language=en-US&page=1')
            .then((resp) => resp.json())
            .then((data) => { setData(data.movies.Math.floor(Math.random() * 21)) })
    }

    const setFavorite = (m) => {
        console.log(m)
    }
    const getGenres = (idGenre) => {
        let genreName = [];
        for (let i = 0; i < idGenre.length; i++) {
            for (let k = 0; k < genres.length; k++){
               if (idGenre[i] === genres[k].id) {
                 genreName.push(genres[k].name) 
               } 
            } 
        };
        return genreName.join(" - ");
    }

    const getRanking = (note) => {
        console.log(note);
        let x = note;
        if (x >= 9.5) {
            return <Ranking5/>
        } else if (x >= 6.7){
            return <Ranking4/>
        } else if (x >= 4.7){
            return <Ranking3/>
        } else if (x >= 2.7){
            return <Ranking2/>
        } else if (x >= 2){
            return <Ranking1/>
        } else {
            return <SansRanking/>
        }
    }

    return (
        <div className='cardBlock'>
            {
                data.length != 0 &&
                data.map(movie => (
                    <div className='blockCardFilm'
                        key={movie.id}>
                        <CardFilm 
                            title={movie.original_title}
                            poster={'https://image.tmdb.org/t/p/w500/'+movie.poster_path}
                            ranking={getRanking(movie.vote_average)}
                            year={movie.release_date.slice(0,4)}
                            genres={getGenres(movie.genre_ids)}
                        />
                        <ChoixFilmButton handleNext={fetchMovieAgain} handleFavorite={(e)=>setFavorite(movie)} />




                    </div>

                ))

            }


        </div>
    )
}

export default RandomCards
