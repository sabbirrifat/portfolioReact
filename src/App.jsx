import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener("load", () => setLoaded(true));
  }, []);
  return (
    <>
      <div className="App" style={{ display: loaded ? "inline" : "none" }}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <div className="loading-spinner" style={{ display: loaded ? 'none' : 'flex'}}>
        <ClimbingBoxLoader size={30} color={"#0077ff"} loading={!loaded} />
      </div>
    </>
  );
}

export default App;
