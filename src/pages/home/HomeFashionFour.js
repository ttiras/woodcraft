import React, { Fragment } from "react";

import MetaTags from "react-meta-tags";
import HeroSliderTwelve from "../../wrappers/hero-slider/HeroSliderTwelve";
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
      <MetaTags>
        <title>Micota. | Wood Craft</title>
        <meta
          name='description'
          content='Fashion home of flone react minimalist eCommerce template.'
        />
      </MetaTags>
      <LayoutOne>
        {/* hero slider */}
        <HeroSliderTwelve />
        {/* product grid */}

        {/* tab product */}
        <TabProduct spaceBottomClass='pb-60' category='furniture' />
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
