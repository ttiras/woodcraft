import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './UserOrders.css'

export default function ({orders}){
    const [shippingModalShow, setShippingModalShow] = useState(false);

    const handleShippingModal = (e) => {
        e.preventDefault();
        //setOrderId(e.target.value)
        setShippingModalShow(true);
      };
    

    return (
        <div className='shop-list-wrap mb-30'>
      {orders &&
        orders.map((order) => (
          <div className='row orders p-2' key={order.id}>
            <div className='col-xl-4 col-md-5 col-sm-6'>
              <div className='product-list-image-wrap d-flex overflow-auto'>
                {order.order_items.map((item) => (
                  <div className='container' key={item.product.id}>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/product/" + item.product.id
                      }
                    >
                      <span className="badge badge-secondary productName">{item.product.name}</span>
                      <span className="badge badge-secondary productName2">Adet: {item.qty}</span>
                      <img
                        className='img-orders img-responsive'
                        src={
                          process.env.PUBLIC_URL + item.product.image[0].path
                        }
                        alt=''
                        
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-xl-8 col-md-7 col-sm-6'>
              <div className='shop-list-content'>
  
                  
                    <h4>
                      <strong>Sipariş ID: </strong>
                      {order.id}
                    </h4>

                <div className='product-list-price m-0'>
                  <span>{order.amount} TL </span>
                </div>
                <div className='rating-review d-block'>
                  {order.addresses.map((address) => (
                    <div
                      className='product-list-rating d-flex border-bottom mb-2'
                      key={address.id}
                    >
                      <div>
                        {address.isinvoiceAddress ? (
                          <h4>
                            <strong>Fatura Adresi: </strong>
                          </h4>
                        ) : (
                          <h4>
                            <strong>Teslimat Adresi: </strong>
                          </h4>
                        )}
                      </div>
                      <div>
                        <span>
                          {address.name&& address.surname&& " " +
                            address.name.toUpperCase() +
                            " " +
                            address.surname.toUpperCase() +
                            " "}
                        </span>
                        <span>
                          {" " +
                            address.street +
                            " " +
                            address.town.toUpperCase() +
                            " " +
                            address.city.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className='row border-bottom mb-3'>
                  <div className='col-xl-4 col-md-4 col-sm-4'>
                      {order.isPaid ? (
                        <strong><span className='redPaid'>{order.amount} TL</span> ÖDENDİ</strong>
                      ) : (
                        <strong>ÖDENMEDİ</strong>
                      )}{" "}
                      |{" "}
                      {order.isShipped ? (
                        <strong>KARGLANDI</strong>
                      ) : (
                        <strong>KARGOLANMADI</strong>
                      )}{" "}
                      | {order.isCancelled && <strong>İPTAL EDİLDİ</strong>}
                    </div>
                    <div className='col-xl-2 col-md-2 col-sm-2'>
                      {order.isGift && (
                        <strong className='gift'>HEDİYE PAKETİ </strong>
                      )}
                    </div>
                    <div className='col-xl-4 col-md-4 col-sm-4'>
                      {order.notes && (
                        <h5>
                          <strong>NOTLAR: </strong> {order.notes}
                        </h5>
                      )}
                    </div>
                    
                  </div>
                </div>
                <div className='shop-list-actions d-flex align-items-center'>
                  <div className='shop-list-btn btn-hover'>
                    <button value={order.id} className='active order-btn' onClick={(e)=>handleShippingModal(e)}>
                      {order.isShipped ? 'Sorun Bildir' : 'İptal Et'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
       
    </div>
    )
}