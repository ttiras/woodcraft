import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../../auth/auth-context"
import BlogModal from "./BlogModal";
import { Helmet } from "react-helmet";



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
                <a className="facebook" href="//facebook.com">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="//twitter.com">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="instagram" href="//instagram.com">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {state.role === "MANAGER" && <button key={blog.id} value={'edit'} className='btn btn-danger' onClick={(e)=>handleBlogModal(e)}>Düzenle</button>}

      </div>
      <div className="next-previous-post">
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          {" "}
          <i className="fa fa-angle-left" /> önceki 
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          sonraki <i className="fa fa-angle-right" />
        </Link>
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
