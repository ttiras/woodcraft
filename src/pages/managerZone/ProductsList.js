import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
 
import "./Orders.css";
import ProductModal from "./ProductModal";
import GET_PRODUCTS_PORTAL from "../../graphql/GetProductsPortal";

export default function ProductsList() {
  const [productModalShow, setProductModalShow] = useState(false);
  const [productId, setProductId] = useState(null)
  const [type, setType] = useState('add')
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS_PORTAL);
  if (error) console.log(error);

  const handleProductModal = (e) => {
    e.preventDefault();
    setType(e.target.id)
    setProductId(e.target.value)
    setProductModalShow(true);
  };


  return (
    <div className='shop-list-wrap mb-30'>
      <h3 className='cart-page-title ml-5'><u>Tüm Ürünler</u></h3>
      {data &&
        data.products &&
        data.products.map((product) => (
          <div className='row orders p-2' key={product.id}>
            <div className='col-xl-4 col-md-5 col-sm-6'>
              <div className='product-list-image-wrap d-flex overflow-auto'>
                {product.image.map((image) => (
                  <div className='container' key={image.image_id}>
                    
                      <img
                        className='img-orders img-responsive'
                        src={
                          process.env.PUBLIC_URL + image.path
                        }
                        alt=''
                        
                      />
                
                  </div>
                ))}
              </div>
            </div>
            <div className='col-xl-8 col-md-7 col-sm-6'>
              <div className='shop-list-content'>
              <Link
                      to={
                        process.env.PUBLIC_URL + "/product/" + product.id
                      }
                    >
                        <h4>{product.name}</h4>
                      </Link>
                    
                    <h5>
                      <strong>Ürün ID: </strong>
                      {product.id}
                    </h5>

                <div className='product-list-price m-0'>
                <span >STOK: {product.stock}</span>
                </div>
                <div className='rating-review d-block'>
                  {product.category.map((category) => (
                    <div
                      className='product-list-rating d-flex border-bottom mb-2'
                      key={category.category.category_id}
                    >
                      
                      <div>
                        <span>
                          {category.category.category + " " }
                        </span>
                        
                      </div>
                    </div>
                  ))}
                  <div className='row border-bottom mb-3'>
                  <div className='col-xl-4 col-md-4 col-sm-4'>
                  <span className='redPaid'>{product.price} TL </span>
                         
                 
                 
                    </div>
                    
                    
                    
                  </div>
                </div>
                <div className='shop-list-actions d-flex align-items-center'>
                  <div className='shop-list-btn btn-hover'>
                    <button id='add' value={product.id} className='active order-btn' onClick={(e)=>handleProductModal(e)}>
                      Stoğa Ek Yap
                    </button>
                  </div>
                  <div className='shop-list-btn btn-hover ml-2'>
                    <button id='extract' value={product.id} className='active order-btn' onClick={(e)=>handleProductModal(e)}>
                      Stoktan Çıkart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <ProductModal 
        show={productModalShow}
        onHide={() => setProductModalShow(false)}
        productId={productId}
        type={type}
        refetch={refetch}
        />
    </div>
  );
}
