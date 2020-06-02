import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const About = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <Helmet>
        <title>Micota | Biz</title>
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr hakkında. Keyifle tasarladığımız ve ürettiğimiz doğal ahşap ve doğal boya kullanılan ürünlerimizi nerde ve nasıl hazrıladığımız hakkında kısa bilgiler.'
        />
      </Helmet>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Biz
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass='pt-100' spaceBottomClass='pb-95' />

        {/* banner */}
        <BannerOne spaceBottomClass='pb-70' />

        {/* text grid */}
        <TextGridOne spaceBottomClass='pb-70' />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass='pb-70' />
      </LayoutOne>
    </Fragment>
  );
};

About.propTypes = {
  location: PropTypes.object,
};

export default About;
