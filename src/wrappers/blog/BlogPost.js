import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../../auth/auth-context"
import BlogModal from "./BlogModal";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


const BlogPost = (props) => {
  const state = useAuthState()
  const [blogModalShow, setBlogModalShow] = useState(false);
  const [modalMode, setModalMode] = useState(null)

  const { blog } = props
  const { refetch } = props

  const handleBlogModal=(e)=>{
    e.preventDefault()
    setModalMode(e.target.value)
    setBlogModalShow(true)
  }


  return (
    <Fragment>
      <Helmet>
        <title>Micota | Blog</title>
        <meta
          name='description'
          content={ "Alışveriş sitemiz micota.com.tr bloğu." + blog.quote}
        />
        <meta property="og:url" content={`https://micota.com.tr/post/${blog.id}`} />
      <meta property="og:title" content={blog.title} />
      <meta property="og:description" content={blog.quote} />
      <meta property="og:image:secure_url" itemprop="image" content={`https://backend.rover.micota.com.tr/build/img/${blog.img1}`} />
      <meta property="og:type" content="website" />
      {/* Twitter Card tags */}
      <meta property="twitter:title" content={`https://micota.com.tr/post/${blog.id}`} />
      <meta property="twitter:description" content={blog.title} />
      <meta property="twitter:image" itemprop="image" content={`https://backend.rover.micota.com.tr/build/img/${blog.img1}`} />
      <meta property="twitter:card" content="summary" />
      
      </Helmet>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt={blog.img1.split('.')[0]}
            src={process.env.REACT_APP_PUBLIC_URL + `/build/img/${blog.img1}`}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
  <li>{new Date(blog.created_at).toLocaleString("en-Gb")}</li>
              <li>
              </li>
            </ul>
          </div>
  <h3>{blog.title}</h3>
          <p>
  {blog.p1}{" "}
          </p>
          <blockquote>
            {blog.quote}
          </blockquote>
          <p>
            {blog.p2}
          </p>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt={blog.img2.split('.')[0]}
                src={process.env.REACT_APP_PUBLIC_URL + `/build/img/${blog.img2}`}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt={blog.img3.split('.')[0]}
                src={process.env.REACT_APP_PUBLIC_URL + `/build/img/${blog.img3}`}
              />
            </div>
          </div>
        </div>
        <p>
          {blog.p3}
        </p>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
           {blog.blog_categories.map(cat=>(
            <li key={cat.bcat.id} >{cat.bcat.bcat}</li> 
           ))}
          </ul>
        </div>
        <div className="blog-share">
          <span>paylaş :</span>
          <div className="share-social">
          <ul>
          <li>
            <FacebookShareButton
              url={`https://micota.com.tr/post/${blog.id}`}
            >
              <a title="Facebook'da paylaş">
                <i className='fa fa-facebook' />
              </a>
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={`https://micota.com.tr/post/${blog.id}`}
            >
              <a title="Twitter'da paylaş">
                <i className='fa fa-twitter' />
              </a>
            </TwitterShareButton>
          </li>
          <li>
            <WhatsappShareButton
              url={`https://micota.com.tr/post/${blog.id}`}
            >
              <a title="Whatsapp'da paylaş">
                <i className='fa fa-whatsapp' />
              </a>
            </WhatsappShareButton>
          </li>
        </ul>
          </div>
        </div>
        {state.role === "MANAGER" && <button key={blog.id} value={'edit'} className='btn btn-danger' onClick={(e)=>handleBlogModal(e)}>Düzenle</button>}

      </div>
      <BlogModal
          show={blogModalShow}
          onHide={() => setBlogModalShow(false)}
          blog={blog}
          modalMode={modalMode}
          refetch={refetch}
          />
    </Fragment>
  );
};

export default BlogPost;
