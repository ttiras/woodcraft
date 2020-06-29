import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";

import "../other/Checkout.css";
import INSERT_PRODUCT from "../../graphql/InserProduct";
import GET_CATEGORIES_TAGS from "../../graphql/GetCategoriesandTags";
import INSERT_PRODUCT_TAGS_IMAGES from "../../graphql/InsertProductTagsImages";

function NewProductModal(props) {
  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(GET_CATEGORIES_TAGS);

  const { refetch } = props;

  const [insertProducts, { loading, error, data }] = useMutation(
    INSERT_PRODUCT,
    {
      onCompleted(data) {
        const product_id = data.insert_products_one.id;
        const name = data.inset_products_one.name;
        insertProductTagsImages({
          variables: {
            product_tags: tags.map((tag) => ({
              product_id: product_id,
              tag_id: tag,
            })),
            images: [
              {
                path: `/assets/img/product${name}1.webp`,
                product_id: product_id,
              },
              {
                path: `/assets/img/product${name}2.webp`,
                product_id: product_id,
              },
              {
                path: `/assets/img/product${name}3.webp`,
                product_id: product_id,
              },
            ],
          },
        });
        refetch();
      },
    }
  );

  const [
    insertProductTagsImages,
    { loading: tagsLoading, error: tagsError, data: tagsData },
  ] = useMutation(INSERT_PRODUCT_TAGS_IMAGES, {
    onCompleted(data) {
      refetch();
    },
  });

  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState(null);
  const [loaded, setLoaded] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const { handleSubmit, register, errors } = useForm();
  const { onHide } = props;

  const onSubmit = (data) => {
    insertProducts({
      variables: {
        product: {
          name: data.name,
          base_color: data.base_color,
          fullDescription: data.fullDescription,
          shortDescription: data.shortDescription,
          weight: data.weight,
          price: data.price,
          discount: data.discount,
          dimensions: data.dimensions,
          rating: data.rating,
          category: { data: { category_id: category } },
          sku: data.sku,
        },
      },
    });
    onHide();
  };

  const handleTag = (e) => {
    e.preventDefault();

    setTags([...tags, e.target.value]);
  };

  const handleRemoveTag = (e) => {
    e.preventDefault();
    setTags(tags.filter((item) => item !== e.target.id));
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
              <h3>Yeni Ürün</h3>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='billing-info mb-20'>
                  <label>İsim</label>
                  <input
                    maxLength='255'
                    className='billing-address'
                    placeholder='İsim'
                    type='text'
                    ref={register({ required: true, minLength: 2 })}
                    name='name'
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
                    maxLength='1255'
                    className='billing-address'
                    placeholder='Detaylı Bilgi'
                    rows='3'
                    ref={register({ required: true, minLength: 7 })}
                    name='fullDescription'
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
                    maxLength='755'
                    className='billing-address'
                    placeholder='Kısa açıklama'
                    type='text'
                    ref={register({ required: true, minLength: 2 })}
                    name='shortDescription'
                  />
                  {errors.shortDescription && (
                    <div className='alert alert-danger small' role='alert'>
                      Kısa açıklama boş bırakılamaz.
                    </div>
                  )}
                </div>
                <div className='billing-info mb-20'>
                  <label>Sku</label>
                  <input
                    maxLength='55'
                    className='billing-address'
                    placeholder='Sku'
                    type='text'
                    ref={register({ required: true, minLength: 2 })}
                    name='sku'
                  />
                  {errors.sku && (
                    <div className='alert alert-danger small' role='alert'>
                      Sku boş bırakılamaz.
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
                  />
                  {errors.discount && (
                    <div className='alert alert-danger small' role='alert'>
                      İndirim oranı boş bırakılamaz.
                    </div>
                  )}
                </div>
                <div className='billing-select mb-20'>
                  <label>Kategori</label>
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    ref={register({
                      required: "Kategori boş bırakılamaz.",
                    })}
                    name='category_id'
                  >
                    <option className='text-hide'>Seçiniz</option>
                    {queryData &&
                      queryData.categories.map((category) => {
                        return (
                          <option
                            value={category.category_id}
                            key={category.category_id}
                          >
                            {category.category}
                          </option>
                        );
                      })}
                  </select>
                  {errors.category_id && (
                    <div className='alert alert-danger small' role='alert'>
                      {errors.cateory_id.message}
                    </div>
                  )}
                </div>
                <div className='billing-select mb-20'>
                  <label>Tag</label>
                  <select
                    multiple
                    onChange={(e) => handleTag(e)}
                    ref={register({
                      required: "Tag boş bırakılamaz.",
                    })}
                    name='tag_id'
                    className='selectpicker'
                  >
                    {queryData &&
                      queryData.tags.map((tag) => {
                        return (
                          <option value={tag.tag_id} key={tag.tag_id}>
                            {tag.tag}
                          </option>
                        );
                      })}
                  </select>
                  {errors.tag_id && (
                    <div className='alert alert-danger small' role='alert'>
                      {errors.tag_id.message}
                    </div>
                  )}
                  {tags &&
                    tags.map((item, index) => (
                      <div key={index}>
                        {item}
                        <span
                          onClick={(e) => handleRemoveTag(e)}
                          key={index}
                          id={item}
                          className='ml-1'
                          style={{ color: "red", cursor: "pointer" }}
                        >
                          x
                        </span>
                      </div>
                    ))}
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
                  />
                  {errors.rating && (
                    <div className='alert alert-danger small' role='alert'>
                      Rating boş bırakılamaz.
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

export default NewProductModal;
