import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import GlobalStyles from "./componants/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
