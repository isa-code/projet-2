import { Favorite } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import ChoixFilmButton from "../components/ChoixFilmsButton.js";
import InfoBtn from '../components/InfoBtn';

const RandomCards = (props) => {

    const [data, setData] = useState(null)


    useEffect(() => {
        fetch('https://api.betaseries.com/movies/random?key=e2bce90ed99c')
        .then((resp) => resp.json())
        .then((data) => {setData(data.movies)})
    }, [])

    const fetchMovieAgain = () =>{
        fetch('https://api.betaseries.com/movies/random?key=e2bce90ed99c')
        .then((resp) => resp.json())
        .then((data) => {setData(data.movies)})
    }
    const setFavorite = (m) => {
        props.addFavorite(m)
    }

    return (


        <div>
            {
                data != null &&
                data.map(movie=>(
                    <div key={movie.id}>
                        <h1>{movie.original_title}</h1>
                        <img src={movie.poster} alt="poster"/>
                        <InfoBtn/>
                        <ChoixFilmButton handleNext={fetchMovieAgain} handleFavorite={(e)=>setFavorite(movie)}/>
                
                    </div>
                    
                ))
                
            }
        </div>
    )
}

export default RandomCards
