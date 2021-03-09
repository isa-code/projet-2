import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { useState, useEffect } from 'react';

function ModalInfo(props) {
  
  const [infoFilm, SetInfoFilm] = useState(0);
  const [watchProviders, SetWatchProviders] = useState(0)
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  useEffect(()=>{
    SetInfoFilm(props.infoFilm);
    fetch('https://api.themoviedb.org/3/movie/'+ infoFilm.id +'/watch/providers?api_key=0eb1560cadbbc71b973ed8f868ef57fa')
            .then((resp) => resp.json())
            .then((data) => { getFRproviders(data.results)})
  },[]);

  const getFRproviders = (data) => {
    SetWatchProviders(data);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>{infoFilm.title}</DialogTitle>
      
      <img src={'https://image.tmdb.org/t/p/w400/'+infoFilm.backdrop_path}/>
      <p>{infoFilm.overview}</p>
      {
        watchProviders !== 0 &&
        console.log(watchProviders)
        /*
        watchProviders.flatrate.map((provider) => {
          <div key={provider.id}>
            <img src={'https://image.tmdb.org/t/p/w100/'+provider.logo_path}/>
            <p>{provider.provider_name}</p>
          </div>
        })*/
      }
      
    </Dialog>
  );
}

export default ModalInfo;