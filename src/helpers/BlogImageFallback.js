import React from 'react'
const BlogImgFallback = ({
  name,
  path,
  ...delegated
}) => {
  return (
    <picture>
      <source type="image/webp" srcSet={`https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/blog%2F${path}.webp?alt=media`} />
      <img src={`https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/blog%2F${path}.jpeg?alt=media`} {...delegated} alt={name + ' sunum tepsisi, kahve çay sunumu, ahşap yuvarlak tepsi ve supla, mini coffee table'}/>
    </picture>
  );
};

  export default BlogImgFallback