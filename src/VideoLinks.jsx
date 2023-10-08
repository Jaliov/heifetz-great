import React from 'react';

const VideoDsply = () => {
  return (
    <div className='iframe-container'>
      <iframe
        title='Heifetz plays Paganini'
       
        src='https://www.youtube.com/embed/RPPR5Yqzapo'
        allowFullscreen
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullScreen'
        style = {{ width: "100%"}}
      ></iframe>
    </div>
  );
};

export default VideoDsply;