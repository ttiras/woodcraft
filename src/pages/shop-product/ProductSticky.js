import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescriptionSticky from "../../wrappers/product/ProductImageDescriptionSticky";

const ProductSticky = ({ location, product }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <Helmet>
        <title>Micota | Ürün Sayfası</title>
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr anasayfası. kahve sunumları, sofra düzeni, tepsi, supla gibi ev dekorasyon, sofra ve mutfak eşyaları. Micota orta sehpa yerine koltuk ve yatak üstünde kullanabileceğiniz pratik ve şık bir ahşap sunum tahtasıdır.'
        />
         <meta property="og:url" content={`https://micota.com.tr/product/${product.id}`} />
      <meta property="og:title" content={product.name} />
      <meta property="og:description" content={product.shortDescription} />
      <meta property="og:image:secure_url" itemprop="image" content={`https://micota.com.tr${product.image[0].path}`} />
      <meta property="og:type" content="website" />
      {/* Twitter Card tags */}
      <meta property="twitter:title" content={`https://micota.com.tr/product/${product.id}`} />
      <meta property="twitter:description" content={product.name} />
      <meta property="twitter:image" content={`https://micota.com.tr${product.image[0].path}`} />
      <meta property="twitter:card" content="summary" />
      </Helmet>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop Product
      </BreadcrumbsItem>

      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <ProductImageDescriptionSticky
          spaceTopClass='mt-100'
          spaceBottomClass='mb-100'
          product={product}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass='pb-90'
          productFullDesc={product.fullDescription}
        />

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass='pb-95'
          category={product.category[0].category.category}
        />
      </LayoutOne>
    </Fragment>
  );
};

ProductSticky.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  return {
    product: state.productData.products.filter(
      (single) => single.id === itemId
    )[0],
  };
};

export default connect(mapStateToProps)(ProductSticky);
