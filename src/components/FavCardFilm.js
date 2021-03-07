import React from 'react';
import '../components/StyleGeneral.css';
import InfoBtn from '../components/InfoBtn';
import Button from '@material-ui/core/Button';
import '../components/StyleGeneral.css'
import ModalInfo from './ModalInfo';

export default function FavCardFilm(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(["1"]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
  };


  const titleFilm = props.title;
  return (
      <div className="favCardFilm">
        <img src={props.poster} alt={titleFilm}/>
        <div className='blockButtons'>
          <Button
           className='btnFavInfo'
           type="button" 
           onClick={handleClickOpen}>Plus d'info</Button>
          <Button
            className='btnSupFav'>Supprimer</Button>
          <ModalInfo open={open}  onClose={handleClose} />
        </div>
        
      </div>
  );
}
