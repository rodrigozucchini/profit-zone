import React from 'react';
import './HeaderInicio.css';
import ReactPlayer from 'react-player';


const HeaderInicio = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=Fdns_GzFqFo';

  return (
    <div className="back-header-inicio">
    <div className="header-inicio">
        <ReactPlayer
        width="1000px"
        height="500px"
        className='video-player-video-inicio'
        controls={true} // Deshabilita todos los controles predeterminados
        url={videoUrl}
        />
    </div>
    <p className="text-inicio">
        ¡Haz clic para ver el video ahora!<br/>
    </p>
    </div>
  );
};

export default HeaderInicio;