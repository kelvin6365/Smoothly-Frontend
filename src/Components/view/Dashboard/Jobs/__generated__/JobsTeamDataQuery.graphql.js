/**
 * @flow
 * @relayHash 8403cce5053ad0ec62ee9452df1e11a0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type JobsTeamDataQueryVariables = {|
  TeamId: string,
  Count: number,
|};
export type JobsTeamDataQueryResponse = {|
  +team: ?{|
    +name: string,
    +TeamJobboards: $ReadOnlyArray<{|
      +id: string,
      +belongsToJobboard: ?{|
        +releasePlan: ?$ReadOnlyArray<{|
          +description: string,
          +name: string,
        |}>,
        +sprints: $ReadOnlyArray<{|
          +tasks: ?{|
            +data: $ReadOnlyArray<{|
              +taskTag: {|
                +name: string
              |},
              +taskType: {|
                +name: string
              |},
              +taskState: {|
                +name: string
              |},
              +taskOrderType: {|
                +name: string
              |},
              +taskHoldByUserInfo: {|
                +username: string,
                +name: string,
              |},
            |}>
          |},
          +sprintType: {|
            +name: string
          |},
          +start_date: ?any,
          +end_date: ?any,
        |}>,
        +name: string,
        +description: string,
        +active: string,
      |},
    |}>,
  |}
|};
export type JobsTeamDataQuery = {|
  variables: JobsTeamDataQueryVariables,
  response: JobsTeamDataQueryResponse,
|};
*/


/*
query JobsTeamDataQuery(
  $TeamId: ID!
  $Count: Int!
) {
  team(id: $TeamId) {
    name
    TeamJobboards {
      id
      belongsToJobboard {
        releasePlan {
          description
          name
          id
        }
        sprints {
          tasks(count: $Count) {
            data {
              taskTag {
                name
                id
              }
              taskType {
                name
                id
              }
              taskState {
                name
                id
              }
              taskOrderType {
                name
                id
              }
              taskHoldByUserInfo {
                username
                name
                id
              }
              id
            }
          }
          sprintType {
            name
            id
          }
          start_date
          end_date
          id
        }
        name
        description
        active
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "TeamId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "Count",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "TeamId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "count",
    "variableName": "Count"
  }
],
v6 = [
  (v2/*: any*/)
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "start_date",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "end_date",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "active",
  "args": null,
  "storageKey": null
},
v11 = [
  (v2/*: any*/),
  (v3/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "JobsTeamDataQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "team",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Team",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "TeamJobboards",
            "storageKey": null,
            "args": null,
            "concreteType": "TeamJobboard",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "belongsToJobboard",
                "storageKey": null,
                "args": null,
                "concreteType": "Jobboard",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "releasePlan",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ReleasePlan",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v2/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sprints",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sprint",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "tasks",
                        "storageKey": null,
                        "args": (v5/*: any*/),
                        "concreteType": "TaskPaginator",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "data",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Task",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskTag",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TaskTag",
                                "plural": false,
                                "selections": (v6/*: any*/)
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskType",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TaskType",
                                "plural": false,
                                "selections": (v6/*: any*/)
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskState",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TaskState",
                                "plural": false,
                                "selections": (v6/*: any*/)
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskOrderType",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TaskOrderType",
                                "plural": false,
                                "selections": (v6/*: any*/)
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskHoldByUserInfo",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": false,
                                "selections": [
                                  (v7/*: any*/),
                                  (v2/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sprintType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SprintType",
                        "plural": false,
                        "selections": (v6/*: any*/)
                      },
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ]
                  },
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v10/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "JobsTeamDataQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "team",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Team",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "TeamJobboards",
            "storageKey": null,
            "args": null,
            "concreteType": "TeamJobboard",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "belongsToJobboard",
                "storageKey": null,
                "args": null,
                "concreteType": "Jobboard",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "releasePlan",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ReleasePlan",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sprints",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sprint",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "tasks",
                        "storageKey": null,
                        "args": (v5/*: any*/),
                        "concreteType": "TaskPaginator",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "data",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Task",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskTag",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TaskTag",
                                "plural": false,
                                "selections": (v11/*: any*/)
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskType",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TaskType",
                                "plural": false,
                                "selections": (v11/*: any*/)
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskState",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TaskState",
                                "plural": false,
                                "selections": (v11/*: any*/)
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskOrderType",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TaskOrderType",
                                "plural": false,
                                "selections": (v11/*: any*/)
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "taskHoldByUserInfo",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": false,
                                "selections": [
                                  (v7/*: any*/),
                                  (v2/*: any*/),
                                  (v3/*: any*/)
                                ]
                              },
                              (v3/*: any*/)
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sprintType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SprintType",
                        "plural": false,
                        "selections": (v11/*: any*/)
                      },
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v3/*: any*/)
                    ]
                  },
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v10/*: any*/),
                  (v3/*: any*/)
                ]
              }
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "JobsTeamDataQuery",
    "id": null,
    "text": "query JobsTeamDataQuery(\n  $TeamId: ID!\n  $Count: Int!\n) {\n  team(id: $TeamId) {\n    name\n    TeamJobboards {\n      id\n      belongsToJobboard {\n        releasePlan {\n          description\n          name\n          id\n        }\n        sprints {\n          tasks(count: $Count) {\n            data {\n              taskTag {\n                name\n                id\n              }\n              taskType {\n                name\n                id\n              }\n              taskState {\n                name\n                id\n              }\n              taskOrderType {\n                name\n                id\n              }\n              taskHoldByUserInfo {\n                username\n                name\n                id\n              }\n              id\n            }\n          }\n          sprintType {\n            name\n            id\n          }\n          start_date\n          end_date\n          id\n        }\n        name\n        description\n        active\n        id\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '500f65d07b4ec7d019430345546b620e';
module.exports = node;
