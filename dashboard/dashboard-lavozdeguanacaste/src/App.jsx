import { useEffect, useState } from "react";
import "./App.css";
import firebase from "./auth/firebaseAuth.js";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setLogged(true);
        setLoading(false);
      } else {
        setLogged(false);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <div className="loading">Loading</div>;
  }

  return (
    <div>
      {!logged ? <LoginPage /> : <HomePage />}
      <ToastContainer />
    </div>
  );
}

export default App;
