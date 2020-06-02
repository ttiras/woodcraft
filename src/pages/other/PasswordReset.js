import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useForm } from "react-hook-form";
import Nav from "react-bootstrap/Nav";
import Firebase from "../../auth/firebase";
import { withRouter } from "react-router-dom";

import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const PasswordReset = (props) => {
  const [error, setError] = useState(0);
  const { handleSubmit, register, errors } = useForm();
  const { pathname } = "/reset-password";

  const onSubmit = async (values) => {
    try {
      await Firebase.resetPassword(values.email);
      setError(1);
      setTimeout(function () {
        props.history.push("/login-register");
        setError(0);
      }, 3000);
    } catch (err) {
      setError(2);
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>Micota. | Şifre Yenile</title>
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr şifre işlemlerine bu sayfada ulaşabilirsiniz.'
        />
      </Helmet>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Şifre Yenile
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />
        <div className='login-register-area pt-100 pb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-12 ml-auto mr-auto'>
                <div className='login-register-wrapper'>
                  <Nav variant='pills' className='login-register-tab-list'>
                    <Nav.Item>
                      <Nav.Link eventKey='login'>
                        <h4>Şifre Yenile</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className='login-form-container'>
                    <div className='login-register-form'>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.email && (
                          <div className='alert alert-danger' role='alert'>
                            {errors.email.message}
                          </div>
                        )}
                        <input
                          type='email'
                          name='email'
                          placeholder='Email'
                          ref={register({
                            required: "Aşağıdaki alana email adresi girin.",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message:
                                "Aşağıdaki alana geçerli bir email adresi girin.",
                            },
                          })}
                        />

                        <div className='button-box'>
                          <button type='submit'>
                            <span>Gönder</span>
                          </button>
                          {error === 2 && (
                            <div className='alert alert-danger' role='alert'>
                              Email adresi kayıtlı değil, ya da sunucuda sorun
                              oluştu.
                            </div>
                          )}
                          {error === 1 && (
                            <div className='alert alert-primary' role='alert'>
                              Şifre yenileme maili gönderildi. Gereksiz
                              klasörünü kontol etmeyi unutmayın.
                            </div>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

PasswordReset.propTypes = {
  location: PropTypes.object,
};

export default withRouter(PasswordReset);
