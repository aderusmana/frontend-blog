import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CreatePost,
  DetailPost,
  Home,
  Login,
  MainApp,
  Register,
} from "../../pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route index element={<Home />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="detail-post" element={<DetailPost />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
