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
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </Helmet>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />

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
