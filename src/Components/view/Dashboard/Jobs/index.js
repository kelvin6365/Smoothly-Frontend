import React, { Component } from "react";
import {
  Breadcrumb,
  Button,
  Image,
  Item,
  Loader,
  Label,
  Checkbox,
  Input
} from "semantic-ui-react";
import { fetchQuery, graphql } from "relay-runtime";
import Environment from "../../../../Environment";
import { matchRoutes } from "react-router-config";
import routes from "../../../Function/Router";
import sections from "../../../Function/MatchBreadcrumb";
import TypeColor from "../../../Function/MatchSprintTypeLabelColor";
import "./index.scss";
// const sections = [
// 	{ key: 'Dashboard', content: 'Dashboard', as: NavLink, to: '/dashboard' },
// 	{ key: 'ForTest', content: 'ForTest', active: true }
// ];

const JobsTeamDataQuery = graphql`
  query JobsTeamDataQuery($TeamId: ID!, $Count: Int!) {
    team(id: $TeamId) {
      name
      TeamJobboards {
        id
        belongsToJobboard {
          releasePlan {
            description
            name
          }
          sprints {
            tasks(count: $Count) {
              data {
                taskTag {
                  name
                }
                taskType {
                  name
                }
                taskState {
                  name
                }
                taskOrderType {
                  name
                }
                taskHoldByUserInfo {
                  username
                  name
                }
              }
            }
            sprintType {
              name
            }
            start_date
            end_date
          }
          name
          description
          active
        }
      }
    }
  }
`;
const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showUnActive: false,
      textFilter: ""
    };
  }

  componentDidMount() {
    this.getTeamData();
  }

  getTeamData = () => {
    var variables = {
      TeamId: JSON.parse(localStorage.getItem("_user_data")).userDetail.team_id,
      Count: 20
    };
    fetchQuery(Environment, JobsTeamDataQuery, variables).then(data => {
      console.log("CallBack", data);
      if (data.team != null && data.team != "") {
        this.setState({
          teamData: data.team.name,
          jobBoards: data.team.TeamJobboards,
          loading: false
        });
      }
    });
  };

  renderSprintTypeLabel = obj => {
    var sprintTypes = [],
      typeCount = {};
    var now = new Date();
    // now.setHours(0, 0, 0, 0);
    obj.map(sprint => {
      console.log(new Date(sprint.start_date) < now);
      if (new Date(sprint.start_date) < now) {
        if (typeof sprint.end_date === "string") {
          console.log(new Date(sprint.end_date), now);
          if (new Date(sprint.end_date) > now) {
            if (sprintTypes.indexOf(sprint.sprintType.name) == -1) {
              sprintTypes.push(sprint.sprintType.name);
              typeCount[sprint.sprintType.name] = 1;
            } else {
              typeCount[sprint.sprintType.name] =
                typeCount[sprint.sprintType.name] + 1;
            }
          }
        }
      }
    });
    console.log(typeCount);
    return sprintTypes.map((tpye, id) => {
      return (
        <Label key={id} className={`sprint-type ${TypeColor(tpye)}`}>
          {tpye.toLowerCase().replace(/^\w/, c => c.toUpperCase())}
          {typeCount[tpye] > 1 ? ": " + typeCount[tpye] : ""}
        </Label>
      );
    });
  };

  render() {
    const matchedRoutes = matchRoutes(routes, this.props.location.pathname);
    const {
      loading,
      teamData,
      jobBoards,
      showUnActive,
      textFilter
    } = this.state;
    const { t } = this.props;
    console.log("[App] Page:", matchedRoutes, this.props);
    return (
      <>
        <div className="page-header" id="jobs">
          <Breadcrumb icon="right angle" sections={sections(matchedRoutes)} />
        </div>

        <div className="page-content" id="jobs">
          {loading && (
            <Loader active size={"small"}>
              {t("Loading")}
            </Loader>
          )}
          {!loading && (
            <>
              <div className="content-head">
                <div className="title">{teamData + " " + t("Team Boards")}</div>
              </div>
              <div className="content-body">
                <div className="filter-row ui form">
                  <div className="inline fields">
                    <div className="field">
                      <Input
                        placeholder="Search..."
                        onChange={e =>
                          this.setState({ textFilter: e.target.value })
                        }
                      />
                    </div>
                    <div className="field">
                      <Checkbox
                        toggle
                        label={"Show unactive"}
                        onChange={() =>
                          this.setState({ showUnActive: !showUnActive })
                        }
                        defaultChecked={showUnActive}
                      />
                    </div>
                  </div>
                </div>
                <Item.Group relaxed>
                  {jobBoards.map((obj, index) => {
                    if (
                      showUnActive ||
                      (obj.belongsToJobboard.active == 0 && !showUnActive)
                    )
                      if (
                        obj.belongsToJobboard.name.indexOf(textFilter) != -1 ||
                        textFilter == ""
                      )
                        return (
                          <Item key={index} className="animated zoomIn">
                            <Item.Image
                              size="small"
                              src="https://react.semantic-ui.com/images/wireframe/image.png"
                            />

                            <Item.Content verticalAlign="middle">
                              <Item.Header>
                                {obj.belongsToJobboard.name}
                              </Item.Header>
                              <Item.Description>
                                {obj.belongsToJobboard.description}
                              </Item.Description>
                              <Item.Extra>
                                <Button floated="right">{t("Enter")}</Button>
                                {obj.belongsToJobboard.sprints.length != 0 &&
                                  this.renderSprintTypeLabel(
                                    obj.belongsToJobboard.sprints
                                  )}
                              </Item.Extra>
                            </Item.Content>
                          </Item>
                        );
                  })}
                </Item.Group>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default index;
