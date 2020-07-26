import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import SectionTitleIyzico from "../../components/section-title/SectionTitleIyzico";
import SectionTitleMicota from "../../components/section-title/SectionTitleMicota";

const HomeFashion = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Micota. | Mini Coffee Table</title>
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr anasayfası. Kahve sunumları, sofra düzeni, tepsi, supla gibi ev dekorasyon, ev hediyesi, sofra ve mutfak eşyaları. Micota orta sehpa yerine koltuk ve yatak üstünde kullanabileceğiniz pratik ve şık bir ahşap sunum tepsisidir. Sunum tepsisi, kahve çay sunumu, ahşap yuvarlak tepsi ve supla, mini coffee table.'
        />
      </Helmet>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
        headerTop='visible'
      >
        {/* hero slider */}
        <HeroSliderOne />

        <SectionTitleMicota />

        <SectionTitleIyzico />

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
