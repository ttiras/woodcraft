import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";

import './Blog.css'

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import INSERT_BLOG from "../../graphql/InsertBlog";
import GET_BLOG_CATS from "../../graphql/GetBlogCats";
import INSERT_BLOG_CAT from "../../graphql/InsertBlogCat";
import UPDATE_BLOG from "../../graphql/UpdateBlog";


function BlogModal(props) {
  const { refetch } = props
  const { blog } = props
  const { modalMode } = props
  const { error: caterror, data:catdata } = useQuery(GET_BLOG_CATS);

  const [updateBlog, { error: uperror, data: updata }] = useMutation(
    UPDATE_BLOG,
    {
      onCompleted() {
        refetch();
      },
    }
  );

  const [insertBlogCat, { error: muterror, data: mutdata }] = useMutation(
    INSERT_BLOG_CAT);

  const [insertBlog, { error, data }] = useMutation(
    INSERT_BLOG, {
      onCompleted(data)
      {insertBlogCat({
        variables: {
         bcat: category.map(item=>(
           {
            blog_id: data.insert_blogs_one.id,
            category_id: item
           }
         )) 
        }
      })
        refetch()} 
    }
  );

  if(error)console.log(error)
  if(muterror)console.log(muterror)
  if(uperror)console.log(uperror)
  if(caterror)console.log(caterror)



  const { handleSubmit, register, errors } = useForm();
  const { onHide } = props;
  const [category, setCategory] = useState([])


  const onSubmit = (data) => {
      if(modalMode === 'edit'){
        const vars = data
    updateBlog({
      variables: {
        id: blog.id,
        vars
      },
    });
      }else{insertBlog({
        variables: {
          blog: {
          title: data.title,
          p1: data.p1,
          p2: data.p2,
          p3: data.p3,
          quote: data.quote,
          img1: data.title.replace(/\s+/g, '_') + 1,
          img2: data.title.replace(/\s+/g, '_') + 2,
          img3: data.title.replace(/\s+/g, '_') + 3}
        }
      });}
    
    onHide();
  };

    const handleCat = (e) => {
      e.preventDefault()

      setCategory([...category, e.target.value])
    }

    const handleRemoveCat = (e) => {
      e.preventDefault()
      setCategory(category.filter((item)=>item!==e.target.id))
    }

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
                Yeni Blog
              </h3>
            </div>
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
                    <label>Başlık</label>
                    <input
                      maxLength='255'
                      className='billing-address'
                      placeholder='Başlık'
                      type='text'
                      ref={register({ required: true, minLength: 2 })}
                      name='title'
                      defaultValue={modalMode === 'edit' ? blog.title : ''}
                    />
                    {errors.title && (
                      <div className='alert alert-danger small' role='alert'>
                        Başlık boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Paragraf 1</label>
                    <input
                      maxLength='1256'
                      className='billing-address'
                      placeholder='Paragraf 1'
                      type='text'
                      ref={register({ required: true, minLength: 10 })}
                      name='p1'
                      defaultValue={modalMode === 'edit' ? blog.p1 : ''}

                    />
                    {errors.p1 && (
                      <div className='alert alert-danger small' role='alert'>
                        Paragraf 1 boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Paragraf 2</label>
                    <input
                      maxLength='1256'
                      className='billing-address'
                      placeholder='Paragraf 2'
                      type='text'
                      ref={register({ required: true, minLength: 10 })}
                      name='p2'
                      defaultValue={modalMode === 'edit' ? blog.p2 : ''}

                    />
                    {errors.p2 && (
                      <div className='alert alert-danger small' role='alert'>
                        Paragraf 2 boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Paragraf 3</label>
                    <input
                      maxLength='1256'
                      className='billing-address'
                      placeholder='Paragraf 3'
                      type='text'
                      ref={register({ required: true, minLength: 10 })}
                      name='p3'
                      defaultValue={modalMode === 'edit' ? blog.p3 : ''}

                    />
                    {errors.p3 && (
                      <div className='alert alert-danger small' role='alert'>
                        Paragraf 3 boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className='billing-info mb-20'>
                    <label>Öne çıkan</label>
                    <input
                      maxLength='556'
                      className='billing-address'
                      placeholder='Öne çıkan'
                      type='quote'
                      ref={register({ required: true, minLength: 10 })}
                      name='quote'
                      defaultValue={modalMode === 'edit' ? blog.quote : ''}
                    />
                    {errors.quote && (
                      <div className='alert alert-danger small' role='alert'>
                    Öne çıkan boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  {modalMode !== 'edit' && <div className='billing-select mb-20'>
                  <label>Kategori</label>
                  <select
                    multiple
                    onChange={(e) => handleCat(e)}
                    ref={register({
                      required: "Kategori boş bırakılamaz."
                    })}
                    name='category_id'
                  >
                    {catdata && catdata.bcat.map(item=>{
                       return (
                        <option value={item.id} key={item.id}>
                          {item.bcat}
                        </option>
                      );
                    })}
                  </select>
                  {
                    category&& category.map((item, index)=>(
                    <div key={index}>{item}
                    <span onClick={(e)=>handleRemoveCat(e)} key={index} id={item} className='ml-1' style={{color: 'red', cursor: 'pointer'}} >x</span></div>
                    )
                    )
                  }
                </div>}
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

export default BlogModal;
