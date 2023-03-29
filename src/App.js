import React, { useState } from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import BlogpostsOverview from "./pages/blogpostsOverview/BlogpostsOverview";
import Blogpost from "./pages/blogpost/Blogpost";
import Navigation from "./components/navigation/Navigation";
import {logDOM} from "@testing-library/react";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      <>
          <Navigation></Navigation>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login"  element={<Login toggleAuth={toggleIsAuthenticated} />}/>
          <Route path="/blogposts" element={isAuthenticated ? <BlogpostsOverview /> : <Navigate  to="/" /> }/>
          <Route path ="/blogposts/:blogId" element={isAuthenticated ? <Blogpost /> : <Navigate to="/login" />}/>
      </Routes>
          {console.log(isAuthenticated)}
      </>
  );
}

export default App;