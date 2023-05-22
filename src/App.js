import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Header from "./components/Header";
import { AppContext } from "./context/ContextApi";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AppContext>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/video/:id" Component={Video} />
          </Routes>
          <Footer />
        </Router>
      </AppContext>
    </>
  );
}

export default App;
