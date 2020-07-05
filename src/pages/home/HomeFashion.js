import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BannerNine from "../../wrappers/banner/BannerNine";

const HomeFashion = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Micota. | Wood Craft</title>
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr anasayfası. kahve sunumları, sofra düzeni, tepsi, supla gibi ev dekorasyon, sofra ve mutfak eşyaları. Micota orta sehpa yerine koltuk ve yatak üstünde kullanabileceğiniz pratik ve şık bir ahşap sunum tahtasıdır.'
        />
      </Helmet>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" />

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
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;