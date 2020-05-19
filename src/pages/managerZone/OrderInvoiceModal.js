import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";

import { useForm } from "react-hook-form";

function OrderInvoiceModal(props) {
 

  const { handleSubmit, register, errors } = useForm();

  const { onHide } = props;

  const onSubmit = (data) => {
    onHide();
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
              <h3>Fatura Bilgisi Gir</h3>
            </div>
            <div className='col-lg-6 col-md-6'></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-lg-6 col-md-6 d-flex'>
                <div className='col-lg-6 col-md-6 pl-0'></div>
                <div className='col-lg-6 col-md-6 pl-0'></div>
              </div>
              <div className='col-lg-6 col-md-6'></div>

              <div className='col-lg-12'></div>
              <div className='col-lg-12'></div>
              <div className='col-lg-12'>
                <div className='billing-info mb-20'>
                  <label>Fatura</label>
                  <input
                    maxLength='120'
                    className='billing-address'
                    placeholder='Cadde, sokak, kapı numarası gibi bilgileri eksiksiz giriniz.'
                    type='text'
                    ref={register({ required: true, minLength: 7 })}
                    name='street'
                  />
                  {errors.street && (
                    <div className='alert alert-danger small' role='alert'>
                      Adres en az 7 karakter olmalı.
                    </div>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6'></div>
              <div className='col-lg-6 col-md-6'></div>
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

export default OrderInvoiceModal;
