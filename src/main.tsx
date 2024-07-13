import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css';
import MainSection from './components/MainSection';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/pages/ErrorPage.tsx';
import AboutUs from './components/pages/AboutUs.tsx';
import Socials from './components/pages/Socials.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSection />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/social",
    element: <Socials />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="app">
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  </React.StrictMode>,
)
