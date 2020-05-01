import React, { Fragment } from "react";

import LayoutOne from "../../layouts/LayoutOne";

import DailyOrders from "./DailyOrders";

export default function Orders() {
  return (
    <LayoutOne>
      <div className='shop-bottom-area mt-35'>
        <div className='row list'>
          <Fragment>
            <div className='col-xl-4 col-sm-6'>
              <DailyOrders />
            </div>
          </Fragment>
        </div>
      </div>
    </LayoutOne>
  );
}
