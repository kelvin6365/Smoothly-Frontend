import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import { config } from "./Config/system";
import history from "./history";

function fetchQuery(operation, variables, cacheConfig, uploadables, props) {
  //Config
  var accessToken = localStorage.getItem("_token");
  var baseurl = config.graphqQL_url;
  let body;

  if (!isEmpty(uploadables)) {
    if (!window.FormData) {
      throw new Error("Uploading files without `FormData` not supported.");
    }

    const formData = new FormData();
    formData.append("query", operation.text);
    formData.append("variables", JSON.stringify(variables));

    Object.keys(uploadables).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
        formData.append(key, uploadables[key]);
      }
    });

    body = formData;
  } else {
    body = JSON.stringify({
      query: operation.text,
      variables
    });
  }
  return fetch(baseurl, {
    method: "POST",
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
      "Content-Type": "application/json"
    },
    body
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
      if (response.errors) {
        if (response.errors[0].debugMessage == "Unauthenticated.") {
          localStorage.removeItem("_user_data");
          localStorage.removeItem("_token");
          localStorage.removeItem("_retoken");
          return history.push("/");
        }
        return response;
      } else {
        return response;
      }
    })
    .catch(err => {
      console.log("error:", err);
      return err.json();
    });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default withRouter(environment);
