import './assets/scss/base.scss'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Footer from './components/Footer'
import Home from './pages/Home'
import SideNav from './components/SideNav';
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'


function App() {

  const Layout = () => {
    return (
    <div className="main-layout">
      <SideNav />
      <Outlet/>
    </div>)
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children: [{
        path: "/",
        element: 
        <div className="content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </div>
      },
      {
        path: "/about",
        element:<About />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]}
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
