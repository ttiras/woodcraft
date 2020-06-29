import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ singlePost }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="blog-wrap mb-30 scroll-zoom">
        <div className="blog-img">
          <Link to={process.env.PUBLIC_URL + 'post/' + singlePost.id}>
            <img src={process.env.PUBLIC_URL + 'assets/img/blog/' + singlePost.img1} alt="" />
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
