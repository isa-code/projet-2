import { useState, useEffect } from 'react';
import ChoixFilmButton from "./ChoixFilmsButton.js";
import CardFilm from './cardFilm';
import './RandomCards.css';
import Ranking5 from './Ranking5';
import Ranking4 from './Ranking4';
import Ranking3 from './Ranking3';
import Ranking2 from './Ranking2';
import Ranking1 from './Ranking1';
import SansRanking from './SansRanking';

const RandomTotalCards = (props) => {

    const [data, setData] = useState([]);
    const [randomFilm, setRandomFilm] = useState(null);

    const [watchProviders, SetWatchProviders] = useState(null)
    const [casting, setCasting] = useState(null)

    useEffect(() => {
        const min = 1;
        const max = 6500;
        const x = Math.floor(Math.random() * (max - min) + min);
        fetch('https://api.themoviedb.org/3/movie/'+x+'?api_key=2f5db99c0d99450f670eee04fca7d32c&language=fr-FR')
            .then((resp) => resp.json())
            .then((data) => { setFavorite(data)})
    }, [props.reset])

    function fetchMovieAgain() {
        const min = 1;
        const max = 6500;
        const x = Math.floor(Math.random() * (max - min) + min);
        fetch('https://api.themoviedb.org/3/movie/' + x + '?api_key=2f5db99c0d99450f670eee04fca7d32c&language=fr-FR')
            .then((resp) => resp.json())
            .then((data) => { setFavorite(data); });
    }

    /* cette formule stoque les donnes de la api dans un tableau et genere un numero aletoire pour avoir un seule film */
    function setFavorite(data) {
        setRandomFilm(data);
        getCastings(data.id);
    }

    function getCastings(id) {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=0eb1560cadbbc71b973ed8f868ef57fa&language=fr-FR')
            .then((resp) => resp.json())
            .then((data) => { setCasting(data); });
    }
    const getGenres = (idGenre) => {
        let genreName = [];
        for (let i = 0; i < idGenre.length; i++) {
                genreName.push(idGenre[i].name) 
            } 
        return genreName.join(" - ");
    }
    

    /* Pour generer les etoiles du Rannking à partir du la note */
    const getRanking = (note) => {
        let x = note;
        if (x >= 9) {
            return <Ranking5/>
        } else if (x >= 7.5){
            return <Ranking4/>
        } else if (x >= 5){
            return <Ranking3/>
        } else if (x >= 3){
            return <Ranking2/>
        } else if (x >= 2){
            return <Ranking1/>
        } else {
            return <SansRanking/>
        }
    };

    return (
        <div className='cardBlock'>
            {
                randomFilm !== null &&
                console.log(randomFilm)
                /*
                <div className='blockCardFilm'
                    key={randomFilm.id}>
                    <CardFilm 
                        title={randomFilm.original_title}
                        poster={'https://image.tmdb.org/t/p/w500/'+randomFilm.poster_path}
                        ranking={getRanking(randomFilm.vote_average)}
                        rankingNote={randomFilm.vote_average}
                        year={randomFilm.release_date.slice(0,4)}
                        genres={getGenres(randomFilm.genres)}
                        infoFilm={randomFilm}
                        filmCasting={casting}
                    />
                    <ChoixFilmButton handleNext={fetchMovieAgain()} handleFavorite={()=>props.addFavorite(randomFilm)} />



                </div>*/
            }
        </div>
    )
}

export default RandomTotalCards;
