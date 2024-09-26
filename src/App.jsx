import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Blog from "./pages/blog/index";
import Tag from "./pages/tag/index";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/home" element={<Home />}>
            {" "}
          </Route>
          <Route path="/about" element={<About />}>
            {" "}
          </Route>
          <Route path="/blog" element={<Blog />}>
            {" "}
          </Route>
          <Route path="/tag" element={<Tag />}>
            {" "}
          </Route>
          <Route path="/signup" element={<Signup />}>
            {" "}
          </Route>
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
