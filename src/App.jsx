import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayouts from "./layouts/RootLayout";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Loader from "./layouts/Loader";
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const PricingPage = React.lazy(() => import("./pages/PricingPage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,

      children: [
        {
          path: "*",
          element: <ErrorPage />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutus",
          element: (
            <Suspense fallback={<Loader />}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: "/pricing",

          element: (
            <Suspense fallback={<Loader />}>
              <PricingPage />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loader />}>
              <ContactPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
