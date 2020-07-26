import React from 'react'
const SliderImgFallback = ({
    path,
    ...delegated
  }) => {
    return (
      <picture>
        <source type="image/webp" srcSet={`${path}.webp`} />
        <img src={`${path}.png`} {...delegated} alt=' sunum tepsisi, kahve çay sunumu, ahşap yuvarlak tepsi ve supla, mini coffee table'/>
      </picture>
    );
  };

  export default SliderImgFallback