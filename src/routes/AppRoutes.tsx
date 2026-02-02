import {Routes, Route, Navigate} from "react-router-dom";

import React from 'react'

//Auth Pages
import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup"
import Home from "../features/Home/pages/Home";
import Courses from "../features/courses/pages/Courses";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  )
}

export default AppRoutes