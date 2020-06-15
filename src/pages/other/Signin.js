import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { anonymousLogin, socialLogin} from '../../helpers/social-auth'

import axios from "axios";

import "./Signin.css";

function Signin({ fire, history }) {
  const { handleSubmit, register, errors } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignin=async (e)=>{
    setLoading(true);
      if(e.target.value){
        await socialLogin(e.target.value)
        if(error)
        setError(error)
      }else{
        await anonymousLogin()
        if(error)
        setError(error)
      }
    setLoading(false);
    history.goBack();
  }
  
  const onSubmit = (values) => {
    try {
      fire
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(async (respond) => {
          const user = respond.user;
          axios.post(`https://backend.rover.micota.com.tr/claims`, { user }).then(() => {
            history.goBack();
        }).catch(err=>console.log(err))
        });
    } catch (err) {
      setError(err.message);
    }
  };

  return ( 
    <div className='login-form-container'>
                      <div
                        id='cover-spin'
                        className={loading ? "d-block" : ""}
                      ></div>
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
                message: "Aşağıdaki alana geçerli bir email adresi girin.",
              },
            })}
          />
          {errors.password && (
            <div className='alert alert-danger' role='alert'>
              {errors.password.message}
            </div>
          )}
          <input
            type='password'
            name='password'
            placeholder='Şifre'
            ref={register({
              required: "Aşağıdaki alana şifre girin.",
              minLength: {
                value: 8,
                message:
                  "Aşağıdaki alana en az 8 karakterden oluşan bir şifre girin.",
              },
            })}
          />
          <div className='button-box'>
            <div className='login-toggle-btn'>
              <input type='checkbox' />
              <label className='ml-10'>Beni hatırla</label>
              <Link to={process.env.PUBLIC_URL + "/reset-password"}>
                Şifremi Unuttum
              </Link>
            </div>
            <button type='submit'>
              <span>Giriş</span>
            </button>
            {error && (
              <div className='alert alert-danger' role='alert'>
                Bilgiler hatalı veya sunucuda sorun oluştu.
              </div>
            )}
          </div>
          <div className='button-box text-center'>
            <h5 className='text-divider mb-5'>
              <span>YA DA</span>
            </h5>
            
            <div className='mb-2'>
              <button
                type='button'
                value='t'
                className='btn-block'
                onClick={(e)=>handleSignin(e)}
              >
                <span>
                  <i className='fa fa-twitter'></i> Twitter Hesabınla Giriş Yap
                </span>
              </button>
            </div>
            <div className='mb-2'>
              <button
                type='button'
                value='g'
                className='btn-block'
                onClick={(e)=>handleSignin(e)}
              >
                <span>
                  <i className='fa fa-google'></i> Google Hesabınla Giriş Yap
                </span>
              </button>
            </div>
            <div>
              <button
                type='button'
                value='f'
                className='btn-block'
                onClick={(e)=>handleSignin(e)}
              >
                <span>
                  <i className='fa fa-facebook'></i> Facebook Hesabınla Giriş
                  Yap
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
