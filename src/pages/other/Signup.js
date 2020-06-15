import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signup({ fire, history }) {
  const { handleSubmit, register, errors, watch } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      const result = await fire
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);
      const user = result.user;
      axios.post("https://backend.rover.micota.com.tr/claims", { user });
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

          {errors.password2 && (
            <div className='alert alert-danger' role='alert'>
              {errors.password2.message}
            </div>
          )}
          <input
            type='password'
            name='password2'
            placeholder='Şifreyi tekrar gir'
            ref={register({
              validate: (value) =>
                value === watch("password") ||
                "Aşağıdaki alana ilk şifreyi doğru giriniz",
            })}
          />

          <div className='button-box'>
            <button type='submit'>
              <span>Kayıt</span>
            </button>
            {error && (
              <div className='alert alert-danger' role='alert'>
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
