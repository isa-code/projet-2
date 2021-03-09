import React from 'react';
import '../components/StyleGeneral.css';
import InfoBtn from '../components/InfoBtn';
import './RandomCards.css';

export default function CardFilm(props) {



    const titleFilm = props.title;
    return (
        <div className="cardFilm">
          <img src={props.poster} alt={titleFilm}/>
          <div className='blocktexte'>
                <div>
                    <div className='blockRanking'>
                      {props.ranking} 
                      <p>{props.rankingNote}</p>
                    </div>
                    <p>{props.year}</p>
                    <p><small>{props.genres}</small></p>
                </div>
                <InfoBtn infoFilm={props.infoFilm}/> 
          </div>
          
        </div>
    );
}