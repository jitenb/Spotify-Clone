import React from "react";
import "./Login.css";
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png"
        alt=""
      />

      <a href={loginUrl}>Login into spotify</a>
    </div>
  );
}

export default Login;
