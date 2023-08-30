import ContactUs from "../components/Contact-us";
import Home from "../components/Home";
import Projects from "../components/Projects";
import PageNotFound from "./../components/404";
import Accessibiity from "./../components/Accessibiity";
import Bloging from "../components/Bloging";
import Jobing from "../components/Jobing";
import Ordering from "../components/Ordering";
import Howing from "../components/Howtoing";

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
    path: "/jobing",
    element: Jobing,
  },
  {
    path: "/ordering",
    element: Ordering,
  },
  {
    path: "/howtoing",
    element: Howing,
  },
  {
    path: "accessibiity",
    element: Accessibiity,
  },
];
