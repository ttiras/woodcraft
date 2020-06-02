import React, {useState} from "react";
import { useSubscription } from "@apollo/react-hooks";

import ORDERS_AGGREGATE from "../../graphql/OrdersAggregate";
import { Link } from "react-router-dom";

import './Orders.css'
import PAYMENTS_AGGREGATE from "../../graphql/PaymentsAggregate";

export default function DailyOrderCount() {
  const [highlight, setHighlight] = useState(false)
  const { loading, error, data } = useSubscription(ORDERS_AGGREGATE, {
    onSubscriptionData: () => {
      setHighlight(true)
      setTimeout(() => {
        setHighlight(false)
      }, 250);
    }
  });
  const { loading: payloading, error: payerror, data: paydata } = useSubscription(PAYMENTS_AGGREGATE, {
    onSubscriptionData: () => {
      setHighlight(true)
      setTimeout(() => {
        setHighlight(false)
      }, 250);
    }
  });
if(loading)return 'Loading...'
if(error)console.log(error)
if(payloading)return 'Loading...'
if(payerror)console.log(error)

  return (
    <div className='mb-5 col-lg-2 col-md-2 col-sm-2 charts'>
      {data && (
        <div className='m-auto text-center border-bottom'>
          <h5 className='mb-2 mt-4 border-bottom titles'><strong>Bugüne Kadar Toplam</strong></h5>
          <p className={highlight? 'highlight' : ''}>
            <strong> {data.orders_aggregate.aggregate.count} </strong> Adet
            Sipariş
          </p>
          <p className={highlight? 'highlight' : ''}>
            <strong> {data.orders_aggregate.aggregate.sum.amount} </strong>{" "}
            Lira Satış
          </p>
          </div>
      )}{paydata&&
      <div className='mt-3 text-center border-bottom'>
        <p className={highlight? 'highlight' : ''}>
            <strong> {paydata.payments_aggregate.aggregate.count} </strong> Adet
            Ödeme
          </p>
        <p className={highlight? 'highlight' : ''}>
            <strong> {paydata.payments_aggregate.aggregate.sum.amount} </strong> Lira
            Ödeme
          </p>
      </div>
      }
      <div className='mt-3 mb-3 text-center'>
      <Link to={process.env.PUBLIC_URL + "/orders"}>
                     <button className='btn btn-primary btn-small mb-4'>Tüm Siparişler</button> 
                    </Link>
                   <p> <Link to={process.env.PUBLIC_URL + "/productmanage"}>
                     <button className='btn btn-primary btn-small'> Stok Takibi</button> 
                    </Link></p>
      </div>
          
        
    </div>
  );
}
