import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

export const AppYouTube = () => {
  const onReady = (event) => {
    // Acceso al reproductor en todos los controladores de eventos a través de event.target
    event.target.pauseVideo();
  };

  useEffect(() => {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const videoId = '2g811Eo7K8U';

    return () => {
      // Limpiar cualquier recurso o suscripción si es necesario al desmontar el componente
    };
  }, []); // El segundo argumento de useEffect es una lista de dependencias, si está vacía, se ejecutará solo una vez al montar el componente

  return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />;
};

