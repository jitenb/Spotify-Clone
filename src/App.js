import Login from "./Login";
import "./App.css";
import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebapi from "spotify-web-api-js";

const spotify = new SpotifyWebapi();

function App() {
  const [token, setToken] = useState(null);
  // run the code based on the condition
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }
    console.log("I have the Token:", token);
  }, []);
  return (
    <div className="app">{token ? <h1> I am Logged in</h1> : <Login />}</div>
  );
}

export default App;
