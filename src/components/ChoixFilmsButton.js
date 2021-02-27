import React from 'react';
import Button from '@material-ui/core/Button';
import '../components/StyleGeneral.css';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function ChoixFilmButton(props) {
    
    return (
        <div className="choixFilm">
          <Button
            className='btnChoisFilm'
            type="button" 
            onClick={()=>props.handleNext()}>
                <ClearIcon/>
          </Button>
          <Button
            className='btnChoisFilmFav'
            type="button" 
            onClick={()=>props.handleFavorite()}>
                <FavoriteBorderIcon/>
          </Button>
          <Button
            className='btnChoisFilm'
            type="button" 
            onClick={()=>props.handleNext()}>
                <SyncAltIcon/>
          </Button>
        </div>
      );


}