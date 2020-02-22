import { NavLink } from "react-router-dom";
const sections = (matchedRoutes, name) => {
  var array = [];
  matchedRoutes.map((obj, i) => {
    if (i == 0) {
      return;
    }
    if (i == matchedRoutes.length - 1) {
      array.push({
        key: obj.route.breadcrumbName == null ? name : obj.route.breadcrumbName,
        content:
          obj.route.breadcrumbName == null ? name : obj.route.breadcrumbName,
        as: "label"
      });
    } else {
      array.push({
        key: obj.route.breadcrumbName == null ? name : obj.route.breadcrumbName,
        content:
          obj.route.breadcrumbName == null ? name : obj.route.breadcrumbName,
        as: NavLink,
        to: obj.route.path,
        exact: true
      });
    }
  });
  return array;
};

export default sections;
