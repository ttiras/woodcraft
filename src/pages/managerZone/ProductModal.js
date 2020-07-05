import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import UPDATE_PRODUCT from "../../graphql/UpdateProduct";

import "../other/Checkout.css";

function ProductModal(props) {
  const { refetch } = props;

  const [updateProducts, { loading, error }] = useMutation(
    UPDATE_PRODUCT,
    {
      onCompleted() {
        refetch();
      },
    }
  );

  const { handleSubmit, register, errors } = useForm();
  const { productId } = props;
  const { onHide } = props;
  const { productData } = props;

  const onSubmit = (data) => {
   const vars = data
    updateProducts({
      variables: {
        id: productId,
        vars
      },
    });
    onHide();
  };

  const product =
    productData &&
    productId &&
    productData.products.filter((product) => product.id === productId)[0];

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className='product-quickview-modal-wrapper'
      >
        <Modal.Header closeButton><h4>Ürün Bilgilerini Güncelle</h4></Modal.Header>

        <div className='billing-info-wrap m-4'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
            </div>
            <div className='col-lg-6 col-md-6'></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {product && (
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='billing-info mb-20'>
                    <label>İsim</label>
                    <input
                      maxLength='55'
                      className='billing-address'
                      placeholder='Ölçüler'
                      type='text'
                      ref={register({ required: true, minLength: 2 })}
                      name='name'
                      defaultValue={product.name}
                    />
                    {errors.name && (
                      <div className='alert alert-danger small' role='alert'>
                        İsim boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Zemin Rengi</label>
                    <input
                      maxLength='55'
                      className='billing-address'
                      placeholder='Zemin Rengi'
                      type='text'
                      ref={register({ required: true, minLength: 2 })}
                      name='base_color'
                      defaultValue={product.base_color}
                    />
                    {errors.base_color && (
                      <div className='alert alert-danger small' role='alert'>
                        Zemin Rengi boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Ölçüler</label>
                    <input
                      maxLength='55'
                      className='billing-address'
                      placeholder='Ölçüler'
                      type='text'
                      ref={register({ required: true, minLength: 2 })}
                      name='dimensions'
                      defaultValue={product.dimensions}
                    />
                    {errors.dimensions && (
                      <div className='alert alert-danger small' role='alert'>
                        ölçüler boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Detaylı Bilgi</label>
                    <textarea
                      maxLength='255'
                      className='billing-address'
                      placeholder='Detaylı Bilgi'
                      rows='3'
                      ref={register({ required: true, minLength: 7 })}
                      name='fullDescription'
                      defaultValue={product.fullDescription}
                    />
                    {errors.fullDescription && (
                      <div className='alert alert-danger small' role='alert'>
                        Detaylı bilgi boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Kısa Açıklama</label>
                    <input
                      maxLength='55'
                      className='billing-address'
                      placeholder='Kısa açıklama'
                      type='text'
                      ref={register({ required: true, minLength: 2 })}
                      name='shortDescription'
                      defaultValue={product.shortDescription}
                    />
                    {errors.shortDescription && (
                      <div className='alert alert-danger small' role='alert'>
                        Kısa açıklama boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Ağırlık</label>
                    <input
                      maxLength='22'
                      className='billing-address'
                      placeholder='Ağırlık'
                      type='text'
                      ref={register({ required: true, minLength: 2 })}
                      name='weight'
                      defaultValue={product.weight}
                    />
                    {errors.weight && (
                      <div className='alert alert-danger small' role='alert'>
                        Ağırlık boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>İndirim Oranı</label>
                    <input
                      maxLength='3'
                      className='billing-address'
                      placeholder='İndirim oranı'
                      type='number'
                      ref={register({ required: true, minLength: 1 })}
                      name='discount'
                      defaultValue={product.discount}
                    />
                    {errors.discount && (
                      <div className='alert alert-danger small' role='alert'>
                        İndirim oranı boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Fiyat</label>
                    <input
                      maxLength='4'
                      className='billing-address'
                      placeholder='Fiyat'
                      type='number'
                      ref={register({ required: true, minLength: 1 })}
                      name='price'
                      defaultValue={product.price}
                    />
                    {errors.price && (
                      <div className='alert alert-danger small' role='alert'>
                        Fiyat boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Rating</label>
                    <input
                      maxLength='4'
                      className='billing-address'
                      placeholder='Rating'
                      type='number'
                      ref={register({ required: true, minLength: 1 })}
                      name='rating'
                      defaultValue={product.rating}
                    />
                    {errors.rating && (
                      <div className='alert alert-danger small' role='alert'>
                        Rating boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='d-flex'>
                    <label>Yeni</label>
                    <input
                      className='checkbox'
                      type='checkbox'
                      name='new'
                      defaultValue={true}
                      ref={register}
                    />
                  </div>
                  <div className='d-flex'>
                    <label>Aktif</label>
                    <input
                      className='checkbox'
                      type='checkbox'
                      name='isActive'
                      defaultValue={true}
                      ref={register}
                    />
                  </div>
                </div>
                <div className='button-box pl-15'>
                  <button className='submitAddress' type='submit'>
                    <span>{loading? 'Güncelleniyor...' : 'Güncelle'}</span>
                  </button>
                </div>
                {error&& 'Ürün güncellenemedi, daha sonra tekrar deneyin.'}
              </div>
            )}
          </form>
        </div>
      </Modal>
    </Fragment>
  );
}

export default ProductModal;
