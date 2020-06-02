import PropTypes from "prop-types";
import React, { Fragment } from "react";
import {Helmet} from "react-helmet";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogPost from "../../wrappers/blog/BlogPost";
import { useQuery } from "@apollo/react-hooks";
import GET_SINGLE_BLOG from "../../graphql/GetSingleBlog";

const BlogDetailsStandard = (props) => {
  const { pathname } = props.location;
  const { match } = props;
  const { loading, error, data, refetch } = useQuery(GET_SINGLE_BLOG, {
    variables: { id: match.params.id },
  });
  if (error) console.log(error);
  return (
    <Fragment>
      <Helmet>
        <title>Micota. | Blog</title>
        <meta
          name='description'
          content='Blog post page of flone react minimalist eCommerce template.'
        />
      </Helmet>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Blog
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />
        <div className='blog-area pt-100 pb-100'>
          <div className='container'>
            <div className='row flex-row-reverse'>
              <div className='col-lg-9'>
                <div className='blog-details-wrapper ml-20'>
                  {/* blog post */}
                  {data && <BlogPost blog={data.blogs[0]} refetch={refetch} />}
                </div>
              </div>
              <div className='col-lg-3'>
                {/* blog sidebar */}
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

BlogDetailsStandard.propTypes = {
  location: PropTypes.object,
};

export default BlogDetailsStandard;
