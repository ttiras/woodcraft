import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";

import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import INSERT_SHIPPING from "../../graphql/InsertShipping";


function OrderShippingModal(props) {
  const [insertShipping, { loading: ordersLoading, data }] = useMutation(
    INSERT_SHIPPING
  );
  
  const { handleSubmit, register, errors } = useForm();

  const { onHide } = props;
  const orderId = props.orderId

  const onSubmit = (data) => {
    insertShipping({
      variables: {
        shipping: {
          track: data.track,
          order_id: orderId
        }
      }
    })
    onHide();
    window.location.reload();
  };

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className='product-quickview-modal-wrapper'
      >
        <Modal.Header closeButton></Modal.Header>

        <div className='billing-info-wrap m-4'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <h3>Sipariş Takip Bilgisi Gir</h3>
            </div>
            <div className='col-lg-6 col-md-6'>
              
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-lg-6 col-md-6 d-flex'>
              <div className='col-lg-6 col-md-6 pl-0'>
                
                </div>  
              <div className='col-lg-6 col-md-6 pl-0'>
                
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                
              </div>
              
              <div className='col-lg-12'>
                
              </div>
              <div className='col-lg-12'>
                
              </div>
              <div className='col-lg-12'>
                <div className='billing-info mb-20'>
                  <label>Takip No</label>
                  <input
                    maxLength="120"
                    className='billing-address'
                    placeholder='Takip adresini tam olarak gir.'
                    type='text'
                    ref={register({ required: true, minLength: 7 })}
                    name='track'
                    
                  />
                  {errors.street && (
                    <div className='alert alert-danger small' role='alert'>
                      Takip no en az 7 karakter olmalı.
                    </div>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
               
              </div>
              <div className='col-lg-6 col-md-6'>
               
              </div>
              <div className='button-box pl-15'>
                <button className='submitAddress' type='submit'>
                  <span>Kaydet</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </Fragment>
  );
}

export default OrderShippingModal;
