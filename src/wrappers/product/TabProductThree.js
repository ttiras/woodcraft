import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGridThree from "./ProductGridThree";
import { Link } from "react-router-dom";

const TabProductThree = ({ spaceBottomClass, category }) => {
  return (
    <div
      className={`product-area hm9-section-padding ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container-fluid">
        <Tab.Container defaultActiveKey="bestSeller">
          <Nav variant="pills" className="product-tab-list pb-55 text-center">
            <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>Yeni Ürünler</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Çok Satanlar</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="saleItems">
                <h4>İndirimli Ürünler</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="custom-row-4">
                <ProductGridThree
                  category={category}
                  type="new"
                  limit={10}
                  spaceBottomClass="mb-35"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="custom-row-4">
                <ProductGridThree
                  category={category}
                  type="bestSeller"
                  limit={10}
                  spaceBottomClass="mb-35"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="custom-row-4">
                <ProductGridThree
                  category={category}
                  type="saleItems"
                  limit={10}
                  spaceBottomClass="mb-35"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shop-grid-standard"}
          >
            TÜM ÜRÜNLER
          </Link>
        </div>
      </div>
    </div>
  );
};

TabProductThree.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default TabProductThree;
