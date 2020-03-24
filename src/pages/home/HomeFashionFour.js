import React, { Fragment } from "react";

import MetaTags from "react-meta-tags";
import LayoutFive from "../../layouts/LayoutFive";
import HeroSliderTwelve from "../../wrappers/hero-slider/HeroSliderTwelve";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import BannerNine from "../../wrappers/banner/BannerNine";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductThree from "../../wrappers/product/TabProductThree";
import CountDownOne from "../../wrappers/countdown/CountDownOne";






const HomeFashionFour = () => {
  

  
  return (
    <Fragment>
      <MetaTags>
        <title>Violet | Wood Craft</title>
        <meta
          name='description'
          content='Fashion home of flone react minimalist eCommerce template.'
        />
      </MetaTags>
      <LayoutFive>
        {/* hero slider */}
        <HeroSliderTwelve />
        {/* product grid */}
        {/* section title with text */}
        <SectionTitleWithText spaceBottomClass='pb-90' />

          {/* countdown */}
          <CountDownOne
          spaceTopClass="pt-115"
          spaceBottomClass="pb-115"
          bgImg="/assets/img/woodcraft.jpg"
          dateTime="April 13, 2020 12:12:00"
        />

        {/* tab product */}
        <TabProductThree spaceBottomClass='pb-60' category='electronics' />
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
      </LayoutFive>
    </Fragment>
  );
};

export default HomeFashionFour;
