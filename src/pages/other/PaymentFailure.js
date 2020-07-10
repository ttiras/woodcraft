import React, { Fragment } from "react";

import LayoutOne from "../../layouts/LayoutOne";
import { useEffect } from "react";

import "./Checkout.css";

const PaymentFailure = () => {
 useEffect(() => {
    localStorage.clear("cartData", "notes", "isGift");
  }, []);

  return (
    <Fragment>
      <LayoutOne headerTop='visible'>
        <div className='cart-main-area pt-90 pb-100'>
            <div className='text-center'>
              <div className='alert alert-danger' role='alert'>
                iyzico ödeme işleminin başarısızlıkla sonuçlandığı bilgisini verdi.
              </div>
              <p>
                Eğer bir aksaklık olduğunu düşünüyorsanız bize whatsapp
                üzerinden mesaj bırakabilirsiniz:
              </p>
              <div className='same-language-currency'>
                <span>
                  <a
                    href='https://wa.me/905302225663'
                    target='blank'
                    title='İletişime Geç'
                  >
                    <i className='fa fa-whatsapp' />
                  </a>
                </span>
              </div>
            </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default PaymentFailure;
