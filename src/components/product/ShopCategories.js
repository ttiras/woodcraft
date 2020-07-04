import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";

const ShopCategories = ({ categories, getSortParams }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Kategoriler </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("category", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> Tüm Kategoriler
                </button>
              </div>
            </li>
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        getSortParams("category", category);
                        setActiveSort(e);
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "Kategori bulunamadı"
        )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategories;
