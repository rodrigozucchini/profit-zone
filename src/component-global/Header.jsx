import React from 'react';
import './Header.css';
import ReactPlayer from 'react-player';


const Header = () => {
  const videoUrl = 'https://youtu.be/fXy92pFRC2o';

  return (
    <div className="back-header">
    <h1 className="title">
        OPERA DONDE QUIERAS<br/>
        CON LA MEJOR TECNOLOGÍA<br/>
    </h1>
    <div className="header">
        <ReactPlayer
        width="1000px"
        height="500px"
        className='video-player-video'
        controls={true} // Deshabilita todos los controles predeterminados
        url={videoUrl}
        />
    </div>
    </div>
  );
};

export default Header;