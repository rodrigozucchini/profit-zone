import React from 'react';
import './HeaderInicio.css';
import ReactPlayer from 'react-player';


const HeaderInicio = () => {
  const videoUrl = 'https://youtu.be/0hb9FKKi244';

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
        Descubre nuestra metodología de enseñanza. <br/>
        ¡Haz clic para ver el video ahora!<br/>
    </p>
    </div>
  );
};

export default HeaderInicio;