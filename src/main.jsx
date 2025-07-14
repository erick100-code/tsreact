import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Twopage from './pages/twopage.jsx';


const router = createBrowserRouter([
  {
    path: "/tsreact/",
    element: <App />,
  },
  {
    path:"/tsreact/pagina2",
    element: <Twopage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)