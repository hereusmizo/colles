import { CircularProgress } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  const ROUTES = [
    {
      path: "/",
      component: <Home />,
      isShowing: true,
    },
    {
      path: "/about",
      component: <About />,
      isShowing: true,
    },
    {
      path: "/contact",
      component: <Contact />,
      isShowing: true,
    },
    {
      path: "/pricing",
      component: <Pricing />,
      isShowing: true,
    },
    {
      path: "/privacy",
      component: <Privacy />,
      isShowing: true,
    },
    {
      path: "/terms-and-conditions",
      component: <Terms />,
      isShowing: true,
    },
    {
      path: "/refund-policy",
      component: <RefundPolicy />,
      isShowing: true,
    },
  ];
  return (
    <Wrapper>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 300,
            }}
          >
            <CircularProgress />
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<NotFound />} />
          {ROUTES.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              exact
              element={item.component}
            />
          ))}
        </Routes>
      </Suspense>
    </Wrapper>
  );
};

export default App;
