// import logo from './logo.svg';
import "./App.css";

import React, { useState } from "react";
import Navbar from "./Compenent/Navbar";
import News from "./Compenent/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "39daf6e4ee6a4bc1ae0906a2d93ced9b";
  const [progress, setProgress] = useState(0);
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Routes>
        <Route
          exact
          strict
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={12}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          strict
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={12}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          strict
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={12}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          strict
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={12}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          strict
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={12}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          strict
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={12}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          strict
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={12}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          strict
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={12}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
