import PropTypes from "prop-types";
import React, { useEffect, Fragment } from "react";
import {Helmet} from "react-helmet";
import { useLazyQuery } from "@apollo/react-hooks";
import { useAuthState } from "../../auth/auth-context";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import UserAddresses from "./UserAddresses";
import GET_USER_ORDERS from "../../graphql/GetUserOrders";
import UserOrders from "./UserOrders";

import "./UserOrders.css";

const MyAccount = ({ location }) => {
  const { pathname } = "Hesabım";
  const state = useAuthState();
  const [getOrders, { loading, error, data }] = useLazyQuery(GET_USER_ORDERS);
  if (error) console.log(error);

  useEffect(() => {
    if (state.user) {
      getOrders({
        variables: {
          user_id: state.user.uid,
        },
      });
    }
  }, [state.user]);

  return (
    <Fragment>
      <Helmet>
        <title>Micota. | Hesabım</title>
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr hesab bilgileriniz.'
        />
      </Helmet>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Hesabım
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />
        <div className='myaccount-area pb-80 pt-100'>
          <div className='container'>
            <div className='row'>
              <div className='ml-auto mr-auto col-lg-9'>
                <div className='myaccount-wrapper'>
                  <Accordion>
                    <Card className='single-my-account mb-20'>
                      <Card.Header className='panel-heading'>
                        <Accordion.Toggle variant='link' eventKey='0'>
                          <h3 className='panel-title'>
                            <span>1 .</span> Siparişlerim{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                          {error &&
                            "Siparişlere ulaşamadık. Sunucu ya da bağlantı hatası olmuş olabilir, daha sonra tekrar deneyin."}
                          {loading && "Siparişler yükleniyor..."}
                          {data && <UserOrders orders={data.orders} />}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className='single-my-account mb-20'>
                      <Card.Header className='panel-heading'>
                        <Accordion.Toggle variant='link' eventKey='1'>
                          <h3 className='panel-title'>
                            <span>2 .</span> Adreslerim
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                          {data && data.orders && data.orders.length > 0 && (
                            <UserAddresses
                              addresses={data.orders[0].addresses}
                            />
                          )}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

MyAccount.propTypes = {
  location: PropTypes.object,
};

export default MyAccount;
