import React from "react";
import LoginPage from "../view/LoginPage";
import Dashboard from "../view/Dashboard";
import Home from "../view/Dashboard/Home";
import Boards from "../view/Dashboard/Boards";
import TeamBoards from "../view/Dashboard/TeamBoards";
import ViewBoard from "../view/Dashboard/TeamBoards/ViewBoard";
import { Redirect } from "react-router-dom";
const routes = [
  {
    exact: true,
    path: "/login",
    component: LoginPage
  },
  {
    path: "/m",
    component: Dashboard,
    breadcrumbName: "1",
    routes: [
      {
        path: "/m/dashboard",
        component: Home,
        breadcrumbName: "Dashboard"
      },
      {
        path: "/m/boards",
        component: Boards,
        breadcrumbName: "Team Boards",
        routes: [
          {
            path: "/m/boards/all",
            component: TeamBoards,
            breadcrumbName: "All",
            exact: true
          },
          {
            path: "/m/boards/:board_id",
            component: ViewBoard,
            breadcrumbName: null
          },
          {
            path: "*",
            render: () => <Redirect to={"/m/boards/all"} />
          }
        ]
      },

      {
        path: "*",
        render: () => <Redirect to={"/m/dashboard"} />
      }
    ]
  },
  {
    path: "/m",
    render: () => <Redirect to={"/m/dashboard"} />
  },
  {
    path: "*",
    render: () => <Redirect to={"/m/dashboard"} />
  }

  //   {
  //     path: "/electronics",
  //     component: <div>123</div>,
  //     breadcrumbName: "Electronics",
  //     routes: [
  //       {
  //         path: "/electronics/mobile",
  //         component: <div>123</div>,
  //         breadcrumbName: "Mobile Phone"
  //       },
  //       {
  //         path: "/electronics/desktop",
  //         component: <div>123</div>,
  //         breadcrumbName: "Desktop PC"
  //       },
  //       {
  //         path: "/electronics/laptop",
  //         component: <div>123</div>,
  //         breadcrumbName: "Laptop"
  //       }
  //     ]
  //   }
];

export default routes;
