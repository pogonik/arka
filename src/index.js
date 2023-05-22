import React from 'react';
import ReactDOM from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismicio'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

const router = createBrowserRouter([
  {
    type: 'naslovna',
    path: '/',
    element: <App />
  },
  {
    type: 'naslovna',
    path: '/:lang?',
    element: <App />
  },
  {
    type: 'strana',
    path: '/:lang?/:uid/*',
    element: <App  />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <HelmetProvider>
        <RouterProvider router={router}><App /></RouterProvider>
      </HelmetProvider>
    </PrismicProvider>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
