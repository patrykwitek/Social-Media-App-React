import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, loader as rootLoader }from './components/roots/App';
import { Error } from './components/roots/Error';
import { Contact } from './components/roots/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: rootLoader,
    
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);