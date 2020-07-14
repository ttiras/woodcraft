import React from 'react'
import DailyOrderCount from './DailyOrderCount'
import DailyOrderCharts from './DailyOrderCharts'
import LayoutOne from "../../layouts/LayoutOne";
import ProductCharts from './ProductCharts';

import './Orders.css'

export default function Dashboard(){
    return(
        <LayoutOne headerTop='visible'>
            <div className='text-center'>
            <h3><u>Dashboard</u></h3>
            </div>
        <div className='container'>
            <div className="row justify-content-md-center">
            <div className='col-sm'>
              <DailyOrderCount />
              <div className='col-sm mt-5'>
                <DailyOrderCharts />
              </div>
              <div className='col-sm mt-5'>
                <ProductCharts />
              </div>
          </div>
          </div>
          </div>
          </LayoutOne>
    )
}