import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";

const Product = ({ location, product }) => {
  const { pathname } = location;
  const price = product.price - (product.price * product.discount) / 100;

  const pageContent = product.name + " " + product.fullDescription + " " + product.shortDescription + " " + product.dimensions
  const ldJson = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [
      `https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/product%2F${product.image[0].path}.jpeg?alt=media`,
      `https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/product%2F${product.image[1].path}.jpeg?alt=media`,
      `https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/product%2F${product.image[2].path}.jpeg?alt=media`,
    ],
    description: product.fullDescription,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "MiCoTa",
    },
    author: {
      "@type": "Person",
      name: "Team MiCoTa",
    },
    offers: {
      "@type": "Offer",
      url: `https://micota.com.tr/product/${product.id}`,
      priceCurrency: "TRY",
      price: price,
      priceValidUntil: "2023-11-20",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <Fragment>
      <Helmet>
        <script type='application/ld+json'>{JSON.stringify(ldJson)}</script>
        <title>MiCoTa | Ürün Sayfası</title>
        <meta
          name='description'
          content={pageContent}
        />
        <meta
          property='og:url'
          content={`https://micota.com.tr/product/${product.id}`}
        />
        <meta property='og:title' content={product.name} />
        <meta property='og:description' content={product.shortDescription} />
        <meta
          property='og:image'
          itemprop='image'
          content={`https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/product%2F${product.image[1].path}.jpeg?alt=media`}
        />
        <meta property='og:type' content='website' />
        {/* Twitter Card tags */}
        <meta property='twitter:title' content={product.name} />
        <meta
          property='twitter:description'
          content={product.shortDescription}
        />
        <meta
          property='twitter:image'
          content={`https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/product%2F${product.image[1].path}.jpeg?alt=media`}
        />
        <meta property='twitter:card' content='summary' />
      </Helmet>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Ürün Detayı
      </BreadcrumbsItem>

      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass='pt-100'
          spaceBottomClass='pb-100'
          product={product}
        />

        {/* product description tab */}
        <ProductDescriptionTab spaceBottomClass='pb-90' product={product} />

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass='pb-95'
          category={product.category[0].category.category}
        />
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
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

export default connect(mapStateToProps)(Product);
