import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

function Signin({ fire, history }) {
  const { handleSubmit, register, errors } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
     await fire
        .auth()
        .signInWithEmailAndPassword(values.email, values.password);
      history.goBack();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
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
                Şifre yenileme
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
        </form>
      </div>
    </div>
  );
}

export default Signin;
