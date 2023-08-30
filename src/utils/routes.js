import ContactUs from "../components/Contact-us";
import Home from "../components/Home";
import Projects from "../components/Projects";
import PageNotFound from "./../components/404";
import Accessibiity from "./../components/Accessibiity";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/contact",
    element: ContactUs,
  },
  {
    path: "/projects",
    element: Projects,
  },
  {
    path: "*",
    element: PageNotFound,
  },
  {
    path: "/bloging",
    element: Bloging,
  },
  {
    path: "accessibiity",
    element: Accessibiity,
  },
];
