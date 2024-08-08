import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css';
import MainSection from './components/MainSection';
import Header from './components/header/Header';
import Footer from './components/Footer';
import ErrorPage from './components/pages/ErrorPage';
import AboutUs from './components/header/AboutUs';
import Socials from './components/header/Socials';
import BlogPage from './components/pages/Blog/BlogPage';
import BlogPost from './components/pages/Blog/BlogPost';
import ProtectedRoute from './components/pages/ProtectedRoute';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminDashboard from './components/pages/AdminDashboard/AdminDashboard';
import Login from './components/pages/AdminDashboard/Login';

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
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  }, 
  {
    path: '/login',
    element: <Login />,
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
