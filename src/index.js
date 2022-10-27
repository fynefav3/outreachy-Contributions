import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Leaderboard from "./component/Leaderboard/Leaderboard";
import Record from "./component/Record/Record";
import Edit from "./component/Record/Edit";
import reportWebVitals from "./reportWebVitals";

const Routing = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/record" element={<Record />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

reportWebVitals();
