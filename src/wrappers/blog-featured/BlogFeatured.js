import PropTypes from "prop-types";
import React from "react";
import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
import SectionTitle from "../../components/section-title/SectionTitle";
import { useQuery } from "@apollo/react-hooks";
import GET_FEATURED_BLOGS from "../../graphql/GetFeaturedBlogs";


const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {
  const { loading, error, data } = useQuery(GET_FEATURED_BLOGS);
  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <SectionTitle
          titleText="BLOG"
          positionClass="text-center"
          spaceClass="mb-55"
        />
        <div className="row">
          {data&& data.blogs.map(singlePost => {
            return (
              <BlogFeaturedSingle singlePost={singlePost} key={singlePost.id} />
            );
          })}
          {loading&& 'Loading...'}
          {error&& 'Bağlantı hatası, blog yüklenemedi.'}
        </div>
      </div>
    </div>
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BlogFeatured;
