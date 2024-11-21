import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PortfolioPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
