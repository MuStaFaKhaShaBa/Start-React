import React from 'react';
import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './component/home/Home';
import About from './component/about/About';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import MasterLayout from './component/layout/MasterLayout';


const router = createHashRouter([
  {
    path: '/', element: <MasterLayout />, children: [
      { index: true, element: <Home /> },
      { path: 'about.html', element: <About /> },
      { path: 'portfolio.html', element: <Portfolio /> },
      { path: 'contact.html', element: <Contact /> },
    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
