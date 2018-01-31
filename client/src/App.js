import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExplorePage from "./pages/Explore";
import UploadPage from "./pages/Upload";
// import UploadPage2 from "./pages/Upload2";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ExplorePage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/upload" component={UploadPage} />
      </Switch>
    </div>
  </Router>;

export default App;
