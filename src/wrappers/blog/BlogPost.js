import React, { Fragment, useState } from "react";
import { useAuthState } from "../../auth/auth-context"
import BlogModal from "./BlogModal";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import BlogImageFallback from "../../helpers/BlogImageFallback";


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

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "image": [
      `https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/blog%2F${blog.img1}.jpeg?alt=media`,
     ],
    "datePublished": blog.created_at,
    "dateModified": blog.created_at,
  }


  return (
    <Fragment>
      <Helmet>
      <script type="application/ld+json">
          {JSON.stringify(ldJson)}
        </script>
        <title>Micota | Blog</title> 
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr blog detay. Kahve sunumları, sofra düzeni, tepsi, supla gibi ev dekorasyon, ev hediyesi, sofra ve mutfak eşyaları. Micota orta sehpa yerine koltuk ve yatak üstünde kullanabileceğiniz pratik ve şık bir ahşap sunum tepsisidir. Sunum tepsisi, kahve çay sunumu, ahşap yuvarlak tepsi ve supla, mini coffee table.'
          data-react-helmet="true"
        />
        <meta property="og:url" content={`https://micota.com.tr/post/${blog.id}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.quote} />
        <meta property="og:image" itemprop="image" content={`https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/blog%2F${blog.img1}.jpeg?alt=media`} />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={blog.title} />
        <meta property="twitter:description" content={blog.quote} />
        <meta property="twitter:image" itemprop="image" content={`https://firebasestorage.googleapis.com/v0/b/woodcraft-auth-41aa7.appspot.com/o/blog%2F${blog.img1}.jpeg?alt=media`} />
        <meta property="twitter:card" content="summary" />
      </Helmet>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <BlogImageFallback name={blog.title} path={blog.img1}/>
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
            <BlogImageFallback name={blog.title} path={blog.img2}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
            <BlogImageFallback name={blog.title} path={blog.img3}/>
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
                <i title="Facebook'da paylaş" className='fa fa-facebook' />
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={`https://micota.com.tr/post/${blog.id}`}
            >
                <i title="Twitter'da paylaş" className='fa fa-twitter' />
            </TwitterShareButton>
          </li>
          <li>
            <WhatsappShareButton
              url={`https://micota.com.tr/post/${blog.id}`}
            >
                <i title="Whatsapp'da paylaş" className='fa fa-whatsapp' />
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
