/**
 * @flow
 * @relayHash 41647980dcf77d7426a5760d4edd4af6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ViewBoardDataQueryVariables = {|
  jobboard_id: string,
  team_id: string,
|};
export type ViewBoardDataQueryResponse = {|
  +jobboard: ?{|
    +jobboard_id: string,
    +belongsToJobboard: ?{|
      +name: string,
      +description: string,
      +active: string,
      +releasePlan: ?$ReadOnlyArray<{|
        +release_date: ?any,
        +description: string,
        +name: string,
      |}>,
      +sprints: $ReadOnlyArray<{|
        +name: string,
        +sprintType: {|
          +name: string,
          +DisplayOrder: string,
        |},
        +start_date: ?any,
        +end_date: ?any,
        +tasks: $ReadOnlyArray<{|
          +name: string,
          +description: string,
          +taskTag: {|
            +id: string,
            +name: string,
          |},
          +taskType: {|
            +id: string,
            +name: string,
          |},
          +taskState: {|
            +id: string,
            +DisplayOrder: string,
            +name: string,
          |},
          +taskOrderType: {|
            +id: string,
            +name: string,
          |},
          +endDate: ?any,
          +startDate: ?any,
          +taskHoldByUserInfo: {|
            +name: string
          |},
          +taskHandleByUserInfo: {|
            +name: string
          |},
        |}>,
      |}>,
    |},
  |}
|};
export type ViewBoardDataQuery = {|
  variables: ViewBoardDataQueryVariables,
  response: ViewBoardDataQueryResponse,
|};
*/


/*
query ViewBoardDataQuery(
  $jobboard_id: ID!
  $team_id: ID!
) {
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
        id
      }
      sprints {
        name
        sprintType {
          name
          DisplayOrder
          id
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
            id
          }
          taskHandleByUserInfo {
            name
            id
          }
          id
        }
        id
      }
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "jobboard_id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "team_id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "jobboard_id",
    "variableName": "jobboard_id"
  },
  {
    "kind": "Variable",
    "name": "team_id",
    "variableName": "team_id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "jobboard_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "active",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "release_date",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DisplayOrder",
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v11 = [
  (v10/*: any*/),
  (v3/*: any*/)
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "taskTag",
  "storageKey": null,
  "args": null,
  "concreteType": "TaskTag",
  "plural": false,
  "selections": (v11/*: any*/)
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "taskType",
  "storageKey": null,
  "args": null,
  "concreteType": "TaskType",
  "plural": false,
  "selections": (v11/*: any*/)
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "taskState",
  "storageKey": null,
  "args": null,
  "concreteType": "TaskState",
  "plural": false,
  "selections": [
    (v10/*: any*/),
    (v7/*: any*/),
    (v3/*: any*/)
  ]
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "taskOrderType",
  "storageKey": null,
  "args": null,
  "concreteType": "TaskOrderType",
  "plural": false,
  "selections": (v11/*: any*/)
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endDate",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startDate",
  "args": null,
  "storageKey": null
},
v18 = [
  (v3/*: any*/)
],
v19 = [
  (v3/*: any*/),
  (v10/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ViewBoardDataQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "jobboard",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TeamJobboard",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "belongsToJobboard",
            "storageKey": null,
            "args": null,
            "concreteType": "Jobboard",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "releasePlan",
                "storageKey": null,
                "args": null,
                "concreteType": "ReleasePlan",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v4/*: any*/),
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
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sprintType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SprintType",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v7/*: any*/)
                    ]
                  },
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "tasks",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Task",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "taskHoldByUserInfo",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": (v18/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "taskHandleByUserInfo",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": (v18/*: any*/)
                      }
                    ]
                  }
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
    "name": "ViewBoardDataQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "jobboard",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TeamJobboard",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "belongsToJobboard",
            "storageKey": null,
            "args": null,
            "concreteType": "Jobboard",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "releasePlan",
                "storageKey": null,
                "args": null,
                "concreteType": "ReleasePlan",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v4/*: any*/),
                  (v3/*: any*/),
                  (v10/*: any*/)
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
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sprintType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SprintType",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v7/*: any*/),
                      (v10/*: any*/)
                    ]
                  },
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "tasks",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Task",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "taskHoldByUserInfo",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": (v19/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "taskHandleByUserInfo",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": (v19/*: any*/)
                      },
                      (v10/*: any*/)
                    ]
                  },
                  (v10/*: any*/)
                ]
              },
              (v10/*: any*/)
            ]
          },
          (v10/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ViewBoardDataQuery",
    "id": null,
    "text": "query ViewBoardDataQuery(\n  $jobboard_id: ID!\n  $team_id: ID!\n) {\n  jobboard(jobboard_id: $jobboard_id, team_id: $team_id) {\n    jobboard_id\n    belongsToJobboard {\n      name\n      description\n      active\n      releasePlan {\n        release_date\n        description\n        name\n        id\n      }\n      sprints {\n        name\n        sprintType {\n          name\n          DisplayOrder\n          id\n        }\n        start_date\n        end_date\n        tasks {\n          name\n          description\n          taskTag {\n            id\n            name\n          }\n          taskType {\n            id\n            name\n          }\n          taskState {\n            id\n            DisplayOrder\n            name\n          }\n          taskOrderType {\n            id\n            name\n          }\n          endDate\n          startDate\n          taskHoldByUserInfo {\n            name\n            id\n          }\n          taskHandleByUserInfo {\n            name\n            id\n          }\n          id\n        }\n        id\n      }\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b611c50b0ecab8a2e2a86ce0d40830a4';
module.exports = node;
