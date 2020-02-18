import React from "react";
import Dashboard from "../view/Dashboard/Home";
import Jobs from "../view/Dashboard/Jobs";
import { Redirect } from "react-router-dom";
const routes = [
  {
    path: "/m/dashboard",
    component: Dashboard,
    breadcrumbName: "Dashboard"
  },
  {
    path: "/m/jobs",
    component: Jobs,
    breadcrumbName: "Jobs/Tasks",
    routes: [
      {
        path: "/m/jobs/test",
        component: Jobs,
        breadcrumbName: "Test"
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
