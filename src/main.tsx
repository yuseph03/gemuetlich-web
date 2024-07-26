import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css';
import MainSection from './components/MainSection';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ErrorPage from './components/pages/ErrorPage';
import AboutUs from './components/Header/AboutUs';
import Socials from './components/Header/Socials';
import BlogPage from './components/pages/Blog/BlogPage';
import BlogPost from './components/pages/Blog/BlogPost';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminDashboard from './components/pages/AdminDashboard/AdminDashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSection />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/social",
    element: <Socials />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "posts/:id",
    element: <BlogPost />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    errorElement: <ErrorPage />,
  }
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
