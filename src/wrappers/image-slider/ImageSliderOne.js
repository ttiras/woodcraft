import React from "react";
import Swiper from "react-id-swiper";
import ImageSliderOneSingle from "../../components/image-slider/ImageSliderOneSingle";
import imageData from "../../data/image-slider/image-slider-one.json";
import { useQuery } from "@apollo/react-hooks";
import GET_INSTA from "../../graphql/GetInsta";
import Instagram from "../../components/image-slider/Instagram";

const ImageSliderOne = () => {
  const { loading, error, data } = useQuery(GET_INSTA);

  if(data)console.log(data)

  const settings = {
    loop: false,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <div className="image-slider-area">
      <div className="image-slider-active">
        <Swiper {...settings}>
          {data &&
            data.insta.map((single, key) => {
              return (
                <Instagram url={single.link} key={key}/>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSliderOne;
