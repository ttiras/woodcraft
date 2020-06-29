import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import GET_BLOGS from "../../graphql/GetBlogs";
import { useAuthState } from "../../auth/auth-context"
import BlogModal from "./BlogModal";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const BlogPostsNoSidebar = () => {
  const state = useAuthState()
  const [blogModalShow, setBlogModalShow] = useState(false);
  const { loading, error, data, refetch } = useQuery(GET_BLOGS);

  return (
    <Fragment>
      {loading&& 'Loading...'}
      {error&& 'Bağlantı hatası. Blog yazıları yüklenemedi.'}
      {data&& data.blogs.map(blog=>(
        <div className="col-lg-4 col-md-6 col-sm-12" key={blog.id}>
        <div className="blog-wrap-2 mb-30" >
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + `/post/${blog.id}`}>
              <img
                src={process.env.PUBLIC_URL + `/assets/img/blog/${blog.img1}`}
                alt={blog.img1.split('.')[0]}
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
    <li>{new Date(blog.created_at).toLocaleString("en-Gb")}</li>
                <li>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + `/post/${blog.id}`}>
                {blog.title}
              </Link>
            </h4>
            <p>
             {blog.quote}
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + `/post/${blog.id}`}>
                  devamını oku
                </Link>
              </div>
              <div className="blog-share">
                <span>paylaş :</span>
                <div className="share-social">
                  <ul>
                    
                    <li>
                    <FacebookShareButton
              url={`https://micota.com.tr/post/${blog.id}`}
            >
                      <a className="facebook" title="Facebook'da paylaş">
                        <i className="fa fa-facebook" />
                      </a>
                      </FacebookShareButton>
                    </li>
                    <li>
                    <TwitterShareButton
              url={`https://micota.com.tr/post/${blog.id}`}
            >
                      <a className="twitter" title="Twitter'da paylaş">
                        <i className="fa fa-twitter" />
                      </a>
                      </TwitterShareButton>
                    </li>
                    <li>
                    <WhatsappShareButton
                     url={`https://micota.com.tr/post/${blog.id}`}
                     >
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-whatsapp" />
                      </a>
                      </WhatsappShareButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        ))}
              {state.role === "MANAGER" && <button className='btn btn-secondary mb-5' onClick={()=>setBlogModalShow(true)}>Yeni Blog Ekle</button>}

      <BlogModal 
          show={blogModalShow}
          onHide={() => setBlogModalShow(false)}
          refetch={refetch}
          />
      
    </Fragment>
  );
};

export default BlogPostsNoSidebar;
