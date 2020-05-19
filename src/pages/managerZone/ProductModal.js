import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import UPDATE_PRODUCTS from "../../graphql/UpdateProducts";
import GET_PRODUCTS from "../../graphql/GetProducts";

function ProductModal(props) {
  const { refetch } = props

  const [updateProducts, { loading, error, data }] = useMutation(
    UPDATE_PRODUCTS, {
      onCompleted(){refetch()} 
    }
  );

  const { handleSubmit, register, errors } = useForm();
  const { productId } = props;
  const { type } = props;
  const { onHide } = props;

  const onSubmit = (data) => {
    const stock =
      type === "add" ? Number(data.stock) : -Math.abs(Number(data.stock));
    updateProducts({
      variables: {
        id: productId,
        stock: stock,
      }
    });
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
              <h3>
                {type === "add" ? "Stoğa Ürün Ekle" : "Stoktan Ürün Çıkart"}
              </h3>
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
                  <label>
                    {type === "add"
                      ? "Yeni Ürün Adedi"
                      : "Açıktan Satılan Ürün Adedi"}
                  </label>
                  <input
                    maxLength='5'
                    className='billing-address'
                    placeholder={
                      type === "add"
                        ? "Stoğa eklenecek ürün adedini yaz"
                        : "Stoktan çıkartılacak ürün adedini yaz"
                    }
                    type='text'
                    ref={register({ required: true, minLength: 1 })}
                    name='stock'
                  />
                  {errors.stock && (
                    <div className='alert alert-danger small' role='alert'>
                      Ürün sayısı boş bırakılamaz.
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

export default ProductModal;
