import { signOut } from "firebase/auth";
import firebase from "../../auth/firebaseAuth.js";
import LogoWhite from "../../assets/logo_white.png";
import "./homepage.css";

import React from "react";
import { DragAndDropImage } from "../../components/DragAndDropImage/index.jsx";

export const HomePage = () => {
  const handlerSingOut = () => {
    signOut(firebase.auth);
  };
  return (
    <div className="page">
      <div className="container">
        <div className="container-info">
          <div className="logo">
            <img src={LogoWhite} alt="logo" />
          </div>
          <h2>La Voz de Guanacaste | Dashboard App</h2>
          <p>
            Sube las imagenes que se muestran como banner en la aplicación
            móvil.
          </p>
          <section className="image-element">
            <h3>Banner 01</h3>
            <DragAndDropImage banner="banner01" />
          </section>
          <section className="image-element">
            <h3>Banner 02</h3>
            <DragAndDropImage banner="banner02" />
          </section>
          <button onClick={handlerSingOut}>Logout</button>
        </div>
      </div>
    </div>
  );
};
