import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BannerOne from "../../wrappers/banner/BannerOne";
import SectionTitleIyzico from "../../components/section-title/SectionTitleIyzico";

const HomeFashion = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Micota. | Mini Coffee Table</title>
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

        <SectionTitleIyzico />
        
        {/* banner */}
        <BannerOne spaceBottomClass='pb-70' />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" />

        {/* feature icon */}
        <FeatureIconThree
          spaceBottomClass='pb-70'
          featureShapeClass='support-shape-3'
        />


        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass='pb-95' />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
