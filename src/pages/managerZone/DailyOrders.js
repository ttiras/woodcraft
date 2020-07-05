import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import FilteredOrders from './FilteredOrders'
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import GET_ORDERS_NOT_SHIPPED from "../../graphql/GetOrders";

export default function DailyOrders() {
  const { loading, error, data } = useQuery(GET_ORDERS_NOT_SHIPPED);
  const [type, setType] = useState(false)
  if (error) console.log(error);

  return (
    <div className="container">
    <div className="description-review-wrapper">
      <Tab.Container defaultActiveKey="notShipped">
        <Nav variant="pills" className="description-review-topbar">
          <Nav.Item>
            <Nav.Link eventKey="notShipped" onClick={()=>setType(false)}>
              Güncel Siparişler
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="shipped" onClick={()=>setType(true)}>Geçmiş Siparişler</Nav.Link>
          </Nav.Item>
          
        </Nav>
        <Tab.Content className="description-review-bottom">
          <Tab.Pane eventKey="notShipped">
            {loading&& 'Yükleniyor...'}
            <FilteredOrders data={data} type={type} />
          </Tab.Pane>
          <Tab.Pane eventKey="shipped">
          <FilteredOrders data={data} type={type} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  </div>
  );
}
