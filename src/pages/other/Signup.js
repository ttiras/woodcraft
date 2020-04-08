import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState, useAuthDispatch } from "../../auth/auth-context";

export default function Signup({firebase}) {
  const { handleSubmit, register, errors, watch } = useForm();
  const  dispatch  = useAuthDispatch()

  const onSubmit = async (values) => {
    await firebase.register(values.name, values.email, values.password)
  };

  return (
    <div className='login-form-container'>
      <div className='login-register-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.username && (
            <div className='alert alert-danger' role='alert'>
              {errors.username.message}
            </div>
          )}
          <input
            type='text'
            name='username'
            placeholder='İsim'
            ref={register({
              required: "Aşağıdaki alana isim girin.",
              validate: (value) => value !== "admin" || "Nice try!",
            })}
          />
          <div className='invalid-tooltip'>
            Please choose a unique and valid username.
          </div>

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

          <div className='button-box'>
            <button type='submit'>
              <span>Kayıt</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
