import { Favorite } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import ChoixFilmButton from "../components/ChoixFilmsButton.js";

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
    const setFavorite = () => {
        alert("is Favorite")
        // il faut ajouter le data du film dans un state et envoyer au parent
    }

    return (


        <div>
            {
                data != null &&
                data.map(movie=>(
                    <div key={movie.id}>
                        <h1>{movie.original_title}</h1>
                        <img src={movie.poster} alt="poster"/>
                        <ChoixFilmButton handleNext={fetchMovieAgain} handleFavorite={setFavorite}/>
                        <button onClick={fetchMovieAgain}>Fetch another movie</button>
            

                        
                    </div>
                    
                ))
                
            }
        </div>
    )
}

export default RandomCards
