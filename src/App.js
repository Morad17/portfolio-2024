import './assets/scss/base.scss'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Footer from './components/Footer'
import Home from './pages/Home'
function App() {

  const Layout = () => {
    return (
    <div className="main-layout">
      <Outlet />
      <Footer />
    </div>)
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children: [{
        path: "/",
        element: <Home />
      },
    ]}
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
