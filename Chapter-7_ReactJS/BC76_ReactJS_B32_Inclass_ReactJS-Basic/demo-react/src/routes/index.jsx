import HomeTemplate from "../page/HomeTemplate";
import Home from "../page/HomeTemplate/Home";
import About from "../page/HomeTemplate/About";
import ListMovie from "../page/HomeTemplate/ListMovie";
import AdminTemplate from "../page/AdminTemplate";
import Dashboard from "../page/AdminTemplate/Dashboard";
import AddUser from "../page/AdminTemplate/AddUser";
import PageNotFound from "../page/PageNotFound";
import { Route } from "react-router";
import DemoRedux from "../page/HomeTemplate/DemoRedux/DemoRedux";

const routes = [
  {
    path: "",
    element: HomeTemplate,
    children: [
      {
        path: "",
        element: Home,
      },
      {
        path: "about",
        element: About,
      },
      {
        path: "about/:id",
        element: About,
      },
      {
        path: "list-movie",
        element: ListMovie,
      },
      {
        path: "demo-redux",
        element: DemoRedux,
      },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    children: [
      {
        path: "dashboard",
        element: Dashboard,
      },
      {
        path: "add-user",
        element: AddUser,
      },
    ],
  },
  {
    path: "*",
    element: PageNotFound,
  },
];

const renderRoute = () => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children.map((routeChild) => (
            <Route
              key={routeChild.path}
              path={routeChild.path}
              element={<routeChild.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export { renderRoute };
