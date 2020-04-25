import React, { Fragment, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

import { useQuery } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { useAuthDispatch, useAuthState } from "../../auth/auth-context";
import GET_CITIES from "../../graphql/GetCities";
import GET_TOWNS from "../../graphql/GetTowns";

import "./Checkout.css";

function InvoiceModal(props) {
  const [city, setCity] = useState("Adana");
  const { error: city_query_error, data: city_query_data } = useQuery(
    GET_CITIES
  );
  const { error: town_query_error, data: town_query_data } = useQuery(
    GET_TOWNS,
    {
      variables: { city: city },
    }
  );
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useAuthDispatch();
  const state = useAuthState();

  const { addressType } = props;
  const { onHide } = props;

  const [invoiceType, setInvoiceType] = useState("bireysel");

  const onSubmit = (data) => {
    if (addressType === "shipping") {
      dispatch({
        type: "ADDRESS",
        payload: data,
      });
    } else if (addressType === "invoice") {
      dispatch({
        type: "INVOICE_ADDRESS",
        payload: data,
      });
    }
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
              <h3>Teslimat Adresi</h3>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='form-check form-check-inline'>
                <input
                  type='radio'
                  name='bireysel'
                  className='checks'
                  value='bireysel'
                  checked={invoiceType === "bireysel"}
                  onChange={() => setInvoiceType("bireysel")}
                />
                <label className='form-check-label' htmlFor='inlineCheckbox1'>
                  <strong>Bireysel</strong>
                </label>
              </div>
              <div className='form-check form-check-inline mb-10'>
                <input
                  type='radio'
                  name='kurumsal'
                  className='checks'
                  value='kurumsal'
                  checked={invoiceType === "kurumsal"}
                  onChange={() => setInvoiceType("kurumsal")}
                />
                <label className='form-check-label' htmlFor='inlineCheckbox2'>
                  <strong>Kurumsal</strong>
                </label>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='billing-info mb-20'>
                  <label>İsim | Soyisim</label>
                  <input
                    type='text'
                    ref={register({
                      required: "İsim ve siyisim boş bırakılamaz.",
                      pattern: {
                        value: /^[a-zA-Z\.\'\-]{2,50}(?: [a-zA-Z\.\'\-]{2,50})+$/,
                        message:
                          "İsim ve soyisim en az 2 karakterden oluşmalı ve arada boşluk bırakılmalıdır. ",
                      },
                    })}
                    name='name'
                    defaultValue={
                      addressType === "shipping" && state.address
                        ? state.address.name
                        : addressType === "invoice" && state.invoiceAddress
                        ? state.invoiceAddress.name
                        : ""
                    }
                  />
                  {errors.name && (
                    <div className='alert alert-danger small' role='alert'>
                      {errors.name.message}
                    </div>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='billing-info mb-20'>
                  <label className={invoiceType === "kurumsal" ? addressType === "invoice" ? "noneed" : "" : ""}>
                    TC Kimlik Numarası
                  </label>
                  <input
                    className={invoiceType === "kurumsal" ? addressType === "invoice" ? "noneed" : "" : ""}
                    type='text'
                    ref={
                      invoiceType === "kurumsal" 
                        ? addressType === "invoice" ? register({ required: false })
                        : register({
                            required: "TC kimlik numarası boş bırakılamaz.",
                            pattern: {
                              value: /^((?!(0))[0-9]{11})$/,
                              message:
                                "11 haneli TC kimlik numaranızı boşluk bırakmadan giriniz. ",
                            },
                          }) : register({
                            required: "TC kimlik numarası boş bırakılamaz.",
                            pattern: {
                              value: /^((?!(0))[0-9]{11})$/,
                              message:
                                "11 haneli TC kimlik numaranızı boşluk bırakmadan giriniz. ",
                            },
                          })
                    }
                    disabled={invoiceType === "kurumsal" && addressType === "invoice"}
                    name='identity'
                    defaultValue={
                      addressType === "shipping" && state.address
                        ? state.address.identity
                        : addressType === "invoice" && state.invoiceAddress
                        ? state.invoiceAddress.identity
                        : ""
                    }
                  />
                  {invoiceType === "bireysel" && errors.identity && (
                    <div className='alert alert-danger small' role='alert'>
                      {errors.identity.message}
                    </div>
                  )}
                </div>
              </div>
              {invoiceType === "kurumsal" && (
                <>
                  <div className='col-lg-12'>
                    <div className='billing-info mb-20'>
                      <label>Fİrma İsmi</label>
                      <input
                        type='text'
                        ref={
                          invoiceType === "bireysel"
                            ? register({ required: false })
                            : register({
                                required: "Firma ismi boş bırakılamaz.",
                                pattern: {
                                  value: /^.{0,75}$/,
                                  message:
                                    "Firma ismi en fazla 75 karakter olmalı.",
                                },
                              })
                        }
                        name='firm'
                        defaultValue={
                          addressType === "shipping" && state.address
                            ? state.address.firm
                            : addressType === "invoice" && state.invoiceAddress
                            ? state.invoiceAddress.firm
                            : ""
                        }
                        disabled={invoiceType === "bireysel"}
                      />
                      {errors.firm && (
                        <div className='alert alert-danger small' role='alert'>
                          {errors.firm.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='billing-info mb-20'>
                      <label>Vergi Dairesi</label>
                      <input
                        type='text'
                        ref={
                          invoiceType === "bireysel"
                            ? register({ required: false })
                            : register({
                                required: "Vergi dairesi boş bırakılamaz.",
                                pattern: {
                                  value: /^.{0,50}$/,
                                  message:
                                    "Firma ismi en fazla 50 karakter olmalı.",
                                },
                              })
                        }
                        name='vergid'
                        defaultValue={
                          addressType === "shipping" && state.address
                            ? state.address.vergid
                            : addressType === "invoice" && state.invoiceAddress
                            ? state.invoiceAddress.vergid
                            : ""
                        }
                        disabled={invoiceType === "bireysel"}
                      />
                      {errors.vergid && (
                        <div className='alert alert-danger small' role='alert'>
                          {errors.vergid.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='billing-info mb-20'>
                      <label>Vergi Numarası</label>
                      <input
                        type='text'
                        ref={
                          invoiceType === "bireysel"
                            ? register({ required: false })
                            : register({
                                required: "Vegi numarası boş bırakılamaz.",
                                pattern: {
                                  value: /^((?!(0))[0-9]{0,22})$/,
                                  message:
                                    "Vergi no rakamlardan oluşur ve 22 haneden fazla olamaz. ",
                                },
                              })
                        }
                        name='vergin'
                        defaultValue={
                          addressType === "shipping" && state.address
                            ? state.address.vergin
                            : addressType === "invoice" && state.invoiceAddress
                            ? state.invoiceAddress.vergin
                            : ""
                        }
                        disabled={invoiceType === "bireysel"}
                      />
                      {errors.vergin && (
                        <div className='alert alert-danger small' role='alert'>
                          {errors.vergin.message}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
              <div className='col-lg-12'>
                <div className='billing-select mb-20'>
                  <label>İl</label>
                  <select
                    onChange={(e) => setCity(e.target.value)}
                    ref={register({
                      required: "İl boş bırakılamaz.",
                      pattern: {
                        value: /^(?!.*Seçiniz).*$/,
                        message: "İl boş bırakılamaz.",
                      },
                    })}
                    name='il'
                    defaultValue={
                      addressType === "shipping" && state.address
                        ? state.address.il
                        : addressType === "invoice" && state.invoiceAddress
                        ? state.invoiceAddress.il
                        : ""
                    }
                  >
                    {city_query_error ? (
                      <option disabled className='text-hide'>
                        İl listesi yüklenemedi, il ve ilçeyi aşağıdaki adres
                        alanına yazabilirsiniz.
                      </option>
                    ) : (
                      <option className='text-hide'>Seçiniz</option>
                    )}

                    {city_query_data &&
                      city_query_data.cities.map((city) => {
                        return (
                          <option value={city.city} key={city.id}>
                            {city.city}
                          </option>
                        );
                      })}
                  </select>
                  {errors.il && (
                    <div className='alert alert-danger small' role='alert'>
                      {errors.il.message}
                    </div>
                  )}
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='billing-select mb-20'>
                  <label>İlçe</label>
                  <select
                    ref={register({
                      required: "İlçe boş bırakılamaz.",
                      pattern: {
                        value: /^(?!.*Seçiniz).*$/,
                        message: "İlçe boş bırakılamaz.",
                      },
                    })}
                    name='ilçe'
                    defaultValue={
                      addressType === "shipping" && state.address
                        ? state.address.ilçe
                        : addressType === "invoice" && state.invoiceAddress
                        ? state.invoiceAddress.ilçe
                        : ""
                    }
                  >
                    {town_query_error ? (
                      <option disabled className='text-hide'>
                        İlçe listesi yüklenemedi, il ve ilçeyi aşağıdaki adres
                        alanına yazabilirsiniz..
                      </option>
                    ) : (
                      <option className='text-hide'>Seçiniz</option>
                    )}

                    {town_query_data &&
                      town_query_data.towns.map((town) => {
                        return (
                          <option value={town.town} key={town.id}>
                            {town.town}
                          </option>
                        );
                      })}
                  </select>
                  {errors.ilçe && (
                    <div className='alert alert-danger small' role='alert'>
                      {errors.ilçe.message}
                    </div>
                  )}
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='billing-info mb-20'>
                  <label>Adres</label>
                  <input
                    className='billing-address'
                    placeholder='Cadde, sokak, kapı numarası gibi bilgileri eksiksiz giriniz.'
                    type='text'
                    ref={register({ required: true, minLength: 7 })}
                    name='street'
                    defaultValue={
                      addressType === "shipping" && state.address
                        ? state.address.street
                        : addressType === "invoice" && state.invoiceAddress
                        ? state.invoiceAddress.street
                        : ""
                    }
                  />
                  {errors.street && (
                    <div className='alert alert-danger small' role='alert'>
                      Adres en az 7 karakter olmalı.
                    </div>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='billing-info mb-20'>
                  <label>Telefon</label>
                  <input
                    type='tel'
                    ref={register({
                      required: "Telefon boş bırakılamaz.",
                      pattern: {
                        value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                        message: "Telefon numarası rakamlardan oluşur.",
                      },
                    })}
                    name='phone'
                    defaultValue={
                      addressType === "shipping" && state.address
                        ? state.address.phone
                        : addressType === "invoice" && state.invoiceAddress
                        ? state.invoiceAddress.phone
                        : ""
                    }
                  />
                  {errors.phone && (
                    <div className='alert alert-danger small' role='alert'>
                      {errors.phone.message}
                    </div>
                  )}
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='billing-info mb-20'>
                  <label>Email</label>
                  <input
                    type='text'
                    ref={register({
                      required: "Email boş bırakılamaz ",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Geçerli bir email girin.",
                      },
                    })}
                    name='email'
                    defaultValue={
                      addressType === "shipping" && state.address
                        ? state.address.email
                        : addressType === "invoice" && state.invoiceAddress
                        ? state.invoiceAddress.email
                        : ""
                    }
                  />
                  {errors.email && (
                    <div className='alert alert-danger small' role='alert'>
                      {errors.email.message}
                    </div>
                  )}
                </div>
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

export default InvoiceModal;
