import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";
import AppLayout from "./components/AppLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <React.Fragment key={index}>
              <Route
                path={route.path}
                element={
                  <AppLayout>
                    <route.element />
                  </AppLayout>
                }
              />
            </React.Fragment>
          ))}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
