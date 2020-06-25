import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ singlePost }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="blog-wrap mb-30 scroll-zoom">
        <div className="blog-img">
          <Link to={process.env.PUBLIC_URL + 'post/' + singlePost.id}>
            <img src={"https://backend.rover.micota.com.tr/build/img/" + singlePost.img1} alt="" />
          </Link>
          <div className="blog-category-names">
            {singlePost.blog_categories.map((singleCategory, key) => {
              return (
                <span className="purple" key={key}>
                  {singleCategory.bcat.bcat}
                </span>
              );
            })}
          </div>
        </div>
        <div className="blog-content-wrap">
          <div className="blog-content text-center">
            <h3>
              <Link to={`${process.env.PUBLIC_URL}/post/${singlePost.id}`}>
                {singlePost.title}
              </Link>
            </h3>
            <span>
              By{" "}
              <Link to={`${process.env.PUBLIC_URL}/post/${singlePost.id}`}>
                Editor
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogFeaturedSingle.propTypes = {
  singlePost: PropTypes.object
};

export default BlogFeaturedSingle;
