import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";
import { WhatsappShareButton } from "react-share";
import ProductImgFallback from "../../helpers/ProductImgFallback";


import "./Product.css";

const ProductGridSingle = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      <div
        className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 col-6 prods ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className='product-img'>
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              {product.image && product.image[0] && (
                <ProductImgFallback name={product.name} path={product.image[0].path} className="default-img"/>
              )}
              {product.image.length > 1 ? (
                <ProductImgFallback className="hover-img"
                path={product.image[1].path} name={product.name}/>
              ) : (
                ""
              )}
            </Link>
            {product.discount || product.new ? (
              <div className='product-img-badges'>
                {product.discount ? (
                  <span className='pink'>-%{product.discount}</span>
                ) : (
                  ""
                )}
                {product.new ? <span className='purple'>Yeni</span> : ""}
              </div>
            ) : (
              ""
            )}

            <div className='product-action'>
              <div className='pro-same-action pro-wishlist'>
              {/* eslint-disable-next-line */}
              <a>
                <WhatsappShareButton
                  url={`https://micota.com.tr/product/${product.id}`}
                >
                    <i title="Whatsapp'ta paylaş" className='fa fa-whatsapp' />
                </WhatsappShareButton>
                </a>
              </div>
              <div className='pro-same-action pro-cart'>
                {product.affiliateLink ? (
                  <a
                    href={product.affiliateLink}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {" "}
                    Hemen Al{" "}
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>
                    Seçenekler
                  </Link>
                ) : product.stock && product.stock > 0 ? (
                  <button
                    onClick={() => addToCart(product, addToast)}
                    className={
                      cartItem !== undefined && cartItem.quantity > 0
                        ? "active"
                        : ""
                    }
                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                    title={
                      cartItem !== undefined ? "Sepete Eklendi" : "Sepete Ekle"
                    }
                  >
                    {" "}
                    <i className='pe-7s-cart'></i>{" "}
                    {cartItem !== undefined && cartItem.quantity > 0
                      ? "Sepete Eklendi"
                      : "Sepete Ekle"}
                  </button>
                ) : (
                  <button disabled className='active'>
                    Stokta Kalmadı
                  </button>
                )}
              </div>
              <div className='pro-same-action pro-quickview'>
                <button onClick={() => setModalShow(true)} title='Hızlı Bakış'>
                  <i className='pe-7s-look' />
                </button>
              </div>
            </div>
          </div>
          <div className='product-content text-center'>
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                {product.name}
              </Link>
            </h3>
            {product.rating && product.rating > 0 ? (
              <div className='product-rating'>
                <Rating ratingValue={product.rating} />
              </div>
            ) : (
              ""
            )}
            <div className='product-price'>
              {discountedPrice !== null ? (
                <Fragment>
                  <span>{finalDiscountedPrice + currency.currencySymbol}</span>{" "}
                  <span className='old'>
                    {finalProductPrice + currency.currencySymbol}
                  </span>
                </Fragment>
              ) : (
                <span>{finalProductPrice + currency.currencySymbol} </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

ProductGridSingle.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object,
};

export default ProductGridSingle;
