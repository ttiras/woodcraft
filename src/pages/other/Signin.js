import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import firebase from "firebase";

import { useMutation } from "@apollo/react-hooks";
import INSERT_USER from "../../graphql/InsertUser";

import axios from "axios";

import "./Signin.css";

function Signin({ fire, history }) {
  const [insertUser] = useMutation(INSERT_USER, {
    onCompleted(data) {
      console.log(data);
    },
  });
  const { handleSubmit, register, errors } = useForm();
  const [error, setError] = useState(null);

  const provider = new firebase.auth.GoogleAuthProvider();
  const providerFb = new firebase.auth.FacebookAuthProvider();

  const handleGoogleSignin = () => {
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
        axios.post("http://localhost:8000", { user }).then((res) => {
          console.log(res);
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        setError(errorCode, errorMessage, email, credential);
      });
  };

  const handleFacebookSignin = () => {
    fire
      .auth()
      .signInWithPopup(providerFb)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
        axios.post("http://localhost:8000", { user }).then((res) => {
          console.log(res.config.data.user);
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        setError(errorCode, errorMessage, email, credential);
      });
  };

  const onSubmit = (values) => {
    try {
      fire
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(async (respond) => {
          const uid = respond.user.uid;
          console.log(uid);
          
          history.goBack();
        });
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
                className='btn-block'
                onClick={handleGoogleSignin}
              >
                <span>
                  <i className='fa fa-apple'></i> Apple Hesabınla Giriş Yap
                </span>
              </button>
            </div>
            <div className='mb-2'>
              <button
                type='button'
                className='btn-block'
                onClick={handleGoogleSignin}
              >
                <span>
                  <i className='fa fa-twitter'></i> TwItter Hesabınla Giriş Yap
                </span>
              </button>
            </div>
            <div className='mb-2'>
              <button
                type='button'
                className='btn-block'
                onClick={handleGoogleSignin}
              >
                <span>
                  <i className='fa fa-google'></i> Google Hesabınla Giriş Yap
                </span>
              </button>
            </div>
            <div>
              <button
                type='button'
                className='btn-block'
                onClick={handleFacebookSignin}
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
