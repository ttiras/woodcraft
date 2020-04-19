import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useMutation } from "@apollo/react-hooks";

import { useAuthState, useAuthDispatch } from "../../auth/auth-context";


import axios from 'axios'
import INSERT_USER from "../../graphql/InsertUser";

export default function Signup({ fire, history }) {
  const { handleSubmit, register, errors, watch } = useForm();
  const [insertUser, { loading, data }] = useMutation(
    INSERT_USER,
    {
      onCompleted(data) {
        console.log(data)
      }
    }
  );
  
  const state = useAuthState()
  const dispatch= useAuthDispatch()
  const [error, setError] = useState(null);



  const onSubmit = async (values) => {
    try {
      const result = await fire
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);
        const user = result.user
        axios.post(`${process.env.PUBLIC_URL}:8000/claims`, { user })
        const userRef = fire.firestore().collection("users").doc(user.uid);
        userRef.set({name: values.username, email: values.email })
          setTimeout(() => {
            insertUser({
              variables: {
                user: {
                  name: values.username,
                  email: values.email
                }
              }
     
          })
          }, 2000);
          
          history.goBack()
    } catch (err) {
      setError(err.message);
    }
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
