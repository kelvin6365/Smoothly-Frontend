import React, { Component } from "react";
import { matchRoutes } from "react-router-config";
import routes from "../../../../../Function/Router";
import sections from "../../../../../Function/MatchBreadcrumb";
import {
  Button,
  Image,
  List,
  Loader,
  Table,
  Accordion,
  Icon
} from "semantic-ui-react";

import { fetchQuery, graphql } from "relay-runtime";
import Environment from "../../../../../../Environment";

const ViewBoardDataQuery = graphql`
  query ViewBoardDataQuery($jobboard_id: ID!, $team_id: ID!) {
    jobboard(jobboard_id: $jobboard_id, team_id: $team_id) {
      jobboard_id
      belongsToJobboard {
        name
        description
        active
        releasePlan {
          release_date
          description
          name
        }
        sprints {
          name
          sprintType {
            name
            DisplayOrder
          }
          start_date
          end_date
          tasks {
            name
            description
            taskTag {
              id
              name
            }
            taskType {
              id
              name
            }
            taskState {
              id
              DisplayOrder
              name
            }
            taskOrderType {
              id
              name
            }
            endDate
            startDate
            taskHoldByUserInfo {
              name
            }
            taskHandleByUserInfo {
              name
            }
          }
        }
      }
    }
  }
`;
import { Breadcrumb } from "semantic-ui-react";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activeIndex: [],
      orderByStatus: [],
      orderAddOnStatus: []
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    var newIndex = [...activeIndex];
    if (activeIndex.indexOf(index) != -1) {
      newIndex.splice(activeIndex.indexOf(index), 1);
    } else {
      newIndex.push(index);
    }

    this.setState({ activeIndex: newIndex });
  };

  sort = (prop, arr) => {
    prop = prop.split(".");
    var len = prop.length;

    arr.sort(function(a, b) {
      var i = 0;
      var key;

      while (i < len) {
        key = prop[i];

        if (!a.hasOwnProperty(key)) return 1;
        if (!b.hasOwnProperty(key)) return -1;

        a = a[key];
        b = b[key];
        i++;
      }
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });

    return arr;
  };

  onClickOrderBy = (id, colName, order) => {
    const { jobboardSprintsData, orderByStatus, orderAddOnStatus } = this.state;
    var newArraySort = jobboardSprintsData;
    var newTasksArray = jobboardSprintsData[id].tasks;
    var colRealName = colName.split(":")[0];
    var neworderByStatus = orderByStatus;
    var neworderAddOnStatus = orderAddOnStatus;
    console.log(
      newTasksArray,
      id,
      newTasksArray[0][colRealName],
      colRealName.split(".").length,
      colRealName
    );

    if (orderByStatus.indexOf(colName) != -1) {
      newTasksArray = this.sort(colRealName, newTasksArray).reverse();
    } else {
      newTasksArray = this.sort(colRealName, newTasksArray);
    }
    newArraySort[id].tasks = newTasksArray;
    console.log(newArraySort);
    if (orderByStatus.indexOf(colName) != -1) {
      console.log("remove");
      neworderByStatus.splice(orderByStatus.indexOf(colName), 1);
      neworderAddOnStatus.map(obj => {
        if (obj.id == id && obj.title == colRealName) {
        }
      });
    } else {
      console.log("add");
      neworderByStatus.push(colName);
    }
    if (order != null) {
      orderAddOnStatus.map((obj, index) => {
        if (obj.sprintID == id) {
          neworderAddOnStatus[index].type = order;
        }
      });
      this.setState({
        jobboardSprintsData: newArraySort,
        orderByStatus: neworderByStatus,
        orderAddOnStatus: neworderAddOnStatus
      });
    } else {
      this.setState({
        jobboardSprintsData: newArraySort,
        orderByStatus: neworderByStatus
      });
    }
  };

  getBoardData = () => {
    const matchedRoutes = matchRoutes(routes, this.props.location.pathname);
    const props = matchedRoutes[matchedRoutes.length - 1];
    var variables = {
      team_id: JSON.parse(localStorage.getItem("_user_data")).userDetail
        .team_id,
      jobboard_id: props.match.params.board_id
    };
    fetchQuery(Environment, ViewBoardDataQuery, variables).then(
      (data, errors) => {
        console.log("CallBack", data, errors);
        if (data.jobboard != null && data.jobboard != "") {
          var jobboardSprintsData = JSON.parse(
            JSON.stringify(data.jobboard.belongsToJobboard.sprints)
          );
          var orderAddOnStatus = [];
          jobboardSprintsData = this.sort(
            "sprintType.DisplayOrder",
            jobboardSprintsData
          );
          jobboardSprintsData.map((obj, index) => {
            orderAddOnStatus.push({ sprintID: index, type: "ASC" });
          });

          this.setState({
            jobboardSprintsData: jobboardSprintsData,
            jobBoardData: {
              name: data.jobboard.belongsToJobboard.name,
              description: data.jobboard.belongsToJobboard.description
            },
            loading: false,
            orderAddOnStatus: orderAddOnStatus
          });
        }
      }
    );
  };

  onClickTitle = (index, name) => {
    const { orderByStatus, orderAddOnStatus } = this.state;
    var neworder = "DESC";
    orderAddOnStatus.map(obj => {
      if (obj.sprintID == index) {
        console.log("Find add odd", obj);
        if (orderByStatus.indexOf(name + ":" + index) != -1) {
          console.log(
            "Find status odd",

            orderByStatus.indexOf(name + ":" + index)
          );
          neworder = obj.type == "ASC" ? "DESC" : "ASC";
        }
      }
    });
    console.log(neworder);
    this.onClickOrderBy(index, name + ":" + index, neworder);
  };

  componentDidMount() {
    this.getBoardData();
  }

  render() {
    const matchedRoutes = matchRoutes(routes, this.props.location.pathname);
    const props = matchedRoutes[matchedRoutes.length - 1];
    const {
      loading,
      jobBoardData,
      jobboardSprintsData,
      activeIndex,
      orderByStatus,
      orderAddOnStatus
    } = this.state;
    const { t } = this.props;
    console.log("[View Board Layout]", orderAddOnStatus, orderByStatus);
    return (
      <>
        <div className="page-header" id="jobs">
          <Breadcrumb
            icon="right angle"
            sections={sections(matchedRoutes, props.match.params.board_id)}
          />
        </div>
        <div className="page-content" id="view-board">
          {loading && (
            <Loader active size={"small"}>
              {t("Loading")}
            </Loader>
          )}
          {!loading && (
            <>
              <div className="content-head">
                <div className="title">{jobBoardData.name}</div>
                <div className="title">{jobBoardData.description}</div>
              </div>
              <div className="content-body">
                <Accordion fluid styled>
                  {jobboardSprintsData.map((obj, index) => {
                    return (
                      <div key={index}>
                        <Accordion.Title
                          active={
                            activeIndex.indexOf(index) != -1 ? true : false
                          }
                          index={index}
                          onClick={this.handleClick}
                        >
                          <Icon name="dropdown" />
                          <Image
                            avatar
                            src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                          />
                          {obj.name} {obj.start_date} - {obj.end_date}
                        </Accordion.Title>
                        <Accordion.Content
                          active={
                            activeIndex.indexOf(index) != -1 ? true : false
                          }
                        >
                          <Table color={"red"} key={"red"}>
                            <Table.Header>
                              <Table.Row>
                                <Table.HeaderCell
                                  onClick={() => {
                                    this.onClickTitle(index, "name");
                                  }}
                                >
                                  {t("Task")}
                                  {orderByStatus.indexOf("name:" + index) != -1
                                    ? "have"
                                    : "no"}
                                </Table.HeaderCell>
                                <Table.HeaderCell
                                  onClick={() => {
                                    console.log(index, "Description");
                                  }}
                                >
                                  {t("Description")}
                                </Table.HeaderCell>
                                <Table.HeaderCell
                                  onClick={() => {
                                    this.onClickTitle(
                                      index,
                                      "taskState.DisplayOrder"
                                    );
                                  }}
                                >
                                  {t("Status")}
                                </Table.HeaderCell>
                              </Table.Row>
                            </Table.Header>

                            <Table.Body>
                              {obj.tasks.map((tobj, tindex) => {
                                return (
                                  <Table.Row key={tobj.name + "_task"}>
                                    <Table.Cell> {tobj.name}</Table.Cell>
                                    <Table.Cell>{tobj.description}</Table.Cell>
                                    <Table.Cell>
                                      {tobj.taskState.name}
                                    </Table.Cell>
                                  </Table.Row>
                                );
                              })}
                            </Table.Body>
                          </Table>
                        </Accordion.Content>
                      </div>
                    );
                  })}
                </Accordion>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default index;
