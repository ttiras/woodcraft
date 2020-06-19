import React, { Fragment } from "react";

import { Helmet } from "react-helmet";

import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import BannerNine from "../../wrappers/banner/BannerNine";
import TabProduct from "../../wrappers/product/TabProduct";
import ImageSliderOne from "../../wrappers/image-slider/ImageSliderOne";
import LayoutOne from "../../layouts/LayoutOne";

const HomeFashionFour = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Micota. | Wood Craft</title>
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr anasayfası. kahve sunumları, sofra düzeni, tepsi, supla gibi ev dekorasyon, sofra ve mutfak eşyaları. Micota orta sehpa yerine koltuk ve yatak üstünde kullanabileceğiniz pratik ve şık bir ahşap sunum tahtasıdır.'
        />
      </Helmet>
      <LayoutOne>
        {/* hero slider */}
        <HeroSliderTen />
        {/* product grid */}

        {/* tab product */}
        <TabProduct spaceBottomClass='pb-60' />
        {/* feature icon */}
        <FeatureIconThree
          spaceBottomClass='pb-70'
          featureShapeClass='support-shape-3'
        />
        {/* banner */}
        <BannerNine spaceBottomClass='pb-70' />
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass='pb-95' />
        {/* blog featured */}
        <BlogFeatured spaceBottomClass='pb-55' />
        {/* image slider */}
        <ImageSliderOne />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionFour;
