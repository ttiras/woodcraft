import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import GET_SIDEBAR_BLOGS from "../../graphql/GetSidebarBlogs";

const BlogSidebar = () => {
  const { loading, error, data, } = useQuery(GET_SIDEBAR_BLOGS);

  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Diğer Yazılar </h4>
        {loading&& 'Loading...'}
        {error&& 'Bağlantı Hatası, diğer yazılar yüklenemedi.'}
        <div className="sidebar-project-wrap mt-30">
          {data&& data.blogs.map(blog=>(
          <div className="single-sidebar-blog" key={blog.id}>
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/post/" + blog.id}>
                <img
                  src={
                    `https://backend.rover.micota.com.tr/build/img/${blog.img1}`
                  }
                  alt={blog.img1}
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
            <Link to={process.env.PUBLIC_URL + "/post/" + blog.id}>
                <span>{blog.title}</span>
                </Link>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/post/" + blog.id}>
                {blog.blog_categories[0].bcat.bcat + " " + blog.blog_categories[1].bcat.bcat}
                </Link>
              </h4>
            </div>
          </div>))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
