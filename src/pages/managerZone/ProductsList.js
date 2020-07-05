import React, { Fragment, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import ProductImgFallback from "../../helpers/ProductImgFallback";

import "./Orders.css";
import StockModal from "./StockModal";
import GET_PRODUCTS_PORTAL from "../../graphql/GetProductsPortal";
import ProductModal from "./ProductModal";
import NewProductModal from "./NewProductModal";

export default function ProductsList() {
  const [stockModalShow, setStockModalShow] = useState(false);
  const [productModalShow, setProductModalShow] = useState(false);
  const [newProductModalShow, setNewProductModalShow] = useState(false);

  const [productId, setProductId] = useState(null);
  const [type, setType] = useState("add");
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS_PORTAL);
  if (error) console.log(error);

  const handleStockModal = (e) => {
    e.preventDefault();
    setType(e.target.id);
    setProductId(e.target.value);
    setStockModalShow(true);
  };

  const handleProductModal = (e) => {
    e.preventDefault();
    setProductId(e.target.value);
    setProductModalShow(true);
  };

  return (
    <Fragment>
      <div className='shop-list-wrap mb-30'>
        <div className='shop-list-content'>
          <div className='shop-list-actions d-flex align-items-center ml-2'>
            <div className='col-xl-4 col-sm-6'>
              <h3 className='cart-page-title ml-5'>
                <u>Tüm Ürünler</u>
              </h3>
            </div>
            <div className='col-xl-4 col-sm-6 shop-list-btn btn-hover'>
              <button
                className='active order-btn newProduct'
                onClick={() => setNewProductModalShow(true)}
              >
                Yeni Ürün Ekle
              </button>
            </div>
          </div>
        </div>
        {data &&
          data.products &&
          data.products.map((product) => (
            <div className='row orders p-2' key={product.id}>
              <div className='col-xl-4 col-md-5 col-sm-6'>
                <div className='product-list-image-wrap d-flex overflow-auto'>
                  {loading&& 'Yükleniyor...'}
                  {product.image.map((image) => (
                    <div className='container' key={image.image_id}>
                      <ProductImgFallback
                        path={image.path}
                        className="img-orders img-responsive"
                        name={product.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-xl-8 col-md-7 col-sm-6'>
                <div className='shop-list-content'>
                  <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                    <h4>{product.name}</h4>
                  </Link>

                  <h5>
                    <strong>Ürün ID: </strong>
                    {product.id}
                  </h5>

                  <div className='product-list-price m-0'>
                    <span>STOK: {product.stock}</span>
                  </div>
                  <div className='rating-review d-block'>
                    {product.category.map((category) => (
                      <div
                        className='product-list-rating d-flex border-bottom mb-2'
                        key={category.category.category_id}
                      >
                        <div>
                          <span>
                            {"category: " +
                              category.category.category +
                              " " +
                              category.category.category_id}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className='product-list-rating d-flex border-bottom mb-2'>
                      {product.tag.map((tag) => (
                        <div key={tag.tag.tag_id}>
                          <span className='mr-3'>
                            {"tag: " + tag.tag.tag + " " + tag.tag.tag_id}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className='row border-bottom mb-3'>
                      <div className='col-xl-4 col-md-4 col-sm-4'>
                        <span className='redPaid'>
                          {product.price} TL %{product.discount}{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='shop-list-actions d-flex align-items-center'>
                    <div className='shop-list-btn btn-hover'>
                      <button
                        id='add'
                        value={product.id}
                        className='active order-btn'
                        onClick={(e) => handleStockModal(e)}
                      >
                        Stoğa Ek Yap
                      </button>
                    </div>
                    <div className='shop-list-btn btn-hover ml-2'>
                      <button
                        id='extract'
                        value={product.id}
                        className='active order-btn'
                        onClick={(e) => handleStockModal(e)}
                      >
                        Stoktan Çıkart
                      </button>
                    </div>
                    <div className='shop-list-btn btn-hover ml-2'>
                      <button
                        id='extract'
                        value={product.id}
                        className='active order-btn'
                        onClick={(e) => handleProductModal(e)}
                      >
                        Ürünü Düzenle
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <StockModal
        show={stockModalShow}
        onHide={() => setStockModalShow(false)}
        productId={productId}
        type={type}
        refetch={refetch}
      />
      <ProductModal
        show={productModalShow}
        onHide={() => setProductModalShow(false)}
        productId={productId}
        refetch={refetch}
        productData={data}
      />
      <NewProductModal
        show={newProductModalShow}
        onHide={() => setNewProductModalShow(false)}
        refetch={refetch}
      />
    </Fragment>
  );
}
