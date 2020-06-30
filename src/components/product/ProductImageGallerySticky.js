import PropTypes from "prop-types";
import React from "react";
import ProductImgFallback from "../../helpers/ProductImgFallback";

const productImageGallerySticky = ({ product }) => {
  return (
    <div className="product-large-image-wrapper product-large-image-wrapper--sticky">
      {product.discount || product.new ? (
        <div className="product-img-badges">
          {product.discount ? (
            <span className="pink">-{product.discount}%</span>
          ) : (
            ""
          )}
          {product.new ? <span className="purple">New</span> : ""}
        </div>
      ) : (
        ""
      )}
      <div className="product-sticky-image mb--10">
        {product.image &&
          product.image.map((single, key) => {
            return (
              <div className="product-sticky-image__single mb-10" key={key}>
                <ProductImgFallback
                        path={single.path}
                        className="img-fluid"
                        name={product.name}
                      />
              </div>
            );
          })}
      </div>
    </div>
  );
};

productImageGallerySticky.propTypes = {
  product: PropTypes.object
};

export default productImageGallerySticky;
