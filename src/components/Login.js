import React, { useState } from "react";
import "./Login.css";
const Login = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const inputChangeHandle = (event) => {
    if (event.target.name === "login") {
      setLogin(event.target.value);
      console.log(login);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <div className="login">
      <div className="login_content">
        <div className="login_fileds">
          <h1>Weather-App</h1>
          <input
            className="login_filed"
            name="login"
            placeholder="Nazwa użytkownika"
            onChange={inputChangeHandle}
          />
          <input
            className="login_filed"
            name="password"
            type="password"
            placeholder="Hasło"
            onChange={inputChangeHandle}
          />
          <button
            onClick={() => {
              props.login(login, password);
            }}
          >
            Zaloguj
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
