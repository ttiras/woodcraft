import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPostsNoSidebar from "../../wrappers/blog/BlogPostsNoSidebar";

const BlogNoSidebar = ({ location }) => {
  const { pathname } = location;
  return (
    <Fragment>
      <Helmet>
        <title>Micota. | Blog</title>
        <meta
          name='description'
          content='Micota blog sayfası. Ahşap, kahve sunumları, yuvarlak tepsi, ev hediyesi, supla ve ev dizayn fikirleri ve ürünleriyle ilgili blog yazıları. Ev aksesuarları alışverişi yapmadan önce muhakkak okuyun. Sunum tepsisi, kahve çay sunumu, ahşap yuvarlak tepsi ve supla, mini coffee table.'
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
        <div className='blog-area pt-100 pb-100 blog-no-sidebar'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='mr-20'>
                  <div className='row'>
                    {/* blog posts */}
                    <BlogPostsNoSidebar />
                  </div>

                  {/* blog pagination */}
                  <BlogPagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

BlogNoSidebar.propTypes = {
  location: PropTypes.object,
};

export default BlogNoSidebar;
