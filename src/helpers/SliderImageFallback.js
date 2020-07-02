import React from 'react'
const SliderImgFallback = ({
    path,
    ...delegated
  }) => {
    return (
      <picture>
        <source type="image/webp" srcSet={`${path}.webp`} />
        <img src={`${path}.png`} {...delegated} alt='kahve çay sunumu ahşap yuvarlak tepsi ve supla'/>
      </picture>
    );
  };

  export default SliderImgFallback