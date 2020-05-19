import React, { Fragment } from "react";

import './Orders.css'

import LayoutOne from "../../layouts/LayoutOne";
import ProductsList from "./ProductsList";

export default function ProductManage() {
  return (
    <LayoutOne>
      <div className='shop-bottom-area mt-35 w-90'>
        <div className='row list'>
        
          <Fragment>
            <div className='col-xl-4 col-sm-6'>
              <ProductsList />
            </div>
          </Fragment>
        </div>
      </div>
    </LayoutOne>
  );
}
