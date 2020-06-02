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
        <div className='contact-area pt-100 pb-100'>
            
            <div className='inCharts d-flex'>
              <DailyOrderCount />
              <div className='col-lg-5 col-md-4 border ml-3'>
                <DailyOrderCharts />
              </div>
              <div className='col-lg-5 col-md-4 border ml-3'>
                <ProductCharts />
              </div>
          </div>
          </div>
          </LayoutOne>
    )
}