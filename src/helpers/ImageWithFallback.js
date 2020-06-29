import React from 'react'
const ImgWithFallback = ({
    name,
    fallback,
    ...delegated
  }) => {
    return (
      <picture>
        <source srcSet={src} type="webp"/>
        <img src={fallback} {...delegated} />
      </picture>
    );
  };

  export default ImgWithFallback