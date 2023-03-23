import React, { useState } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import BlogpostsOverview from "./pages/blogpostsOverview/BlogpostsOverview";
import Blogpost from "./pages/blogpost/Blogpost";
import Navigation from "./components/navigation/Navigation";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      <>
          <Navigation></Navigation>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login"  element={<Login />}/>
          <Route path="/blogposts" element={<BlogpostsOverview />}/>
          <Route path ="/blogposts/:blogId" element={<Blogpost />}/>


      </Routes>

      </>
  );
}

export default App;