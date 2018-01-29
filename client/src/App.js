import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExplorePage from "./pages/Explore";
import UploadPage from "./pages/Upload";
import Header from "./components/Header"
import Searchbox from "./components/Searchbox"
import Searchbar from "./components/Searchbar"
import Searchresults from "./components/Searchresults"
import Footer from "./components/Footer"

const App = () =>
    <div>
      <Header />
      <Searchbox />
      <Footer />
    </div>

export default App;
