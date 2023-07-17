import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Layout from "./pages/layout";
import AnimatedCursor from "react-animated-cursor";
import AboutMe from "./pages/about-me";
import ContactMe from "./pages/contact-me";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/contact-me",
        element: <ContactMe />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routerConfig} />
	  <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='94, 84, 142'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
	  />
    </>
  );
}

export default App;
