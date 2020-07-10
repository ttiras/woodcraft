import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import SectionTitleAtelier from "../../components/section-title/SectionTitleAtelier";

const Atelier = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Atölye
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleAtelier spaceTopClass='pt-100' spaceBottomClass='pb-95' />   

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass='pb-70' />
      </LayoutOne>
    </Fragment>
  );
};

Atelier.propTypes = {
  location: PropTypes.object,
};

export default Atelier;
