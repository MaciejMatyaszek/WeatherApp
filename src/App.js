import "./App.css";
import React, { useState, useCallback } from "react";
import { AuthContext } from "./context/AuthenticationContext";
import Login from "./components/Login";
import Weather from "./components/Weather";

function App() {
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState();
  const [cities, setCities] = useState([]);
  const key = "45ea889fc7ac31de2f05f5307eca1574";
  const login = (username, password) => {
    console.log("Logowanie");
    console.log(username);
    console.log(password);
    if (username === "user" && password === "user") {
      setUserId(1);
      setUsername(username);
    }
  };

  const content = !userId ? <Login login={login} /> : <Weather />;

  return (
    <AuthContext.Provider value={{ userId, username, key }}>
      <div className="App">{content}</div>
    </AuthContext.Provider>
  );
}

export default App;
