import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExplorePage from "./pages/Explore";
import UploadPage from "./pages/Upload";
import Header from "./components/Header"
import Searchbar from "./components/Searchbar"
import Searchresults from "./components/Searchresults"

const App = () =>
  // <Router>
    <div>
      <Header />
      <Searchbar />
      <Searchresults />
      {/* <Switch>
        <Route exact path="/" component={ExplorePage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/upload" component={UploadPage} />
      </Switch> */}
    </div>
  // </Router>;

export default App;
