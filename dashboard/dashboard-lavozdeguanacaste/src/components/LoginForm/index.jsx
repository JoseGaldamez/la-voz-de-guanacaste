import React, { useState } from "react";
import { BsFillArrowRightCircleFill, BsHourglassSplit } from "react-icons/bs";
import "./loginform.css";

import firebase from "../../auth/firebaseAuth.js";
import { signInWithEmailAndPassword } from "firebase/auth";

import LogoWhite from "../../assets/logo_white.png";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(firebase.auth, email, password)
      .then((user) => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
          position: "bottom-center",
        });
        setLoading(false);
      });
  };

  return (
    <div className="login-form">
      <p className="image-logo">
        <img src={LogoWhite} alt="logo" />
      </p>
      <h2>Inciar sesión</h2>
      <form onSubmit={submitHandler}>
        <p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            required
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            id="password"
            minLength={6}
            placeholder="Contraseña"
            required
          />
        </p>
        <p>
          <button type="submit" disabled={loading}>
            {loading ? (
              <span>
                {" "}
                <BsHourglassSplit /> Cargando...
              </span>
            ) : (
              <span>
                {" "}
                <BsFillArrowRightCircleFill /> Entrar
              </span>
            )}
          </button>
        </p>
      </form>
    </div>
  );
};
