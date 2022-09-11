import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCvE0_BSbFh0MvPqF4KpWrM5fG5FYmNWNU",
  authDomain: "lavozdeguanacaste-app.firebaseapp.com",
  databaseURL: "https://lavozdeguanacaste-app-default-rtdb.firebaseio.com",
  projectId: "lavozdeguanacaste-app",
  storageBucket: "lavozdeguanacaste-app.appspot.com",
  messagingSenderId: "670473558994",
  appId: "1:670473558994:web:03fc9dd327a5d882e3c60b",
  measurementId: "G-HD7BVEGEE9",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);

export default {
  app,
  analytics,
  auth,
  storage,
};
