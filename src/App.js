import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./componants/Nav";
import GlobalStyles from "./componants/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
