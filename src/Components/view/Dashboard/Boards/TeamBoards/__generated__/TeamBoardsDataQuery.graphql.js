/**
 * @flow
 * @relayHash 14c2b127b6016c2fe445128ea1462a94
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamBoardsDataQueryVariables = {|
  TeamId: string
|};
export type TeamBoardsDataQueryResponse = {|
  +team: ?{|
    +name: string,
    +TeamJobboards: $ReadOnlyArray<{|
      +id: string,
      +jobboard_id: string,
      +belongsToJobboard: ?{|
        +releasePlan: ?$ReadOnlyArray<{|
          +description: string,
          +name: string,
        |}>,
        +sprints: $ReadOnlyArray<{|
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
export type TeamBoardsDataQuery = {|
  variables: TeamBoardsDataQueryVariables,
  response: TeamBoardsDataQueryResponse,
|};
*/


/*
query TeamBoardsDataQuery(
  $TeamId: ID!
) {
  team(id: $TeamId) {
    name
    TeamJobboards {
      id
      jobboard_id
      belongsToJobboard {
        releasePlan {
          description
          name
          id
        }
        sprints {
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
  "name": "jobboard_id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "start_date",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "end_date",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "active",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TeamBoardsDataQuery",
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
              (v4/*: any*/),
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
                      (v5/*: any*/),
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
                        "name": "sprintType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SprintType",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/)
                        ]
                      },
                      (v6/*: any*/),
                      (v7/*: any*/)
                    ]
                  },
                  (v2/*: any*/),
                  (v5/*: any*/),
                  (v8/*: any*/)
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
    "name": "TeamBoardsDataQuery",
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
              (v4/*: any*/),
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
                      (v5/*: any*/),
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
                        "name": "sprintType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SprintType",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/)
                        ]
                      },
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v3/*: any*/)
                    ]
                  },
                  (v2/*: any*/),
                  (v5/*: any*/),
                  (v8/*: any*/),
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
    "name": "TeamBoardsDataQuery",
    "id": null,
    "text": "query TeamBoardsDataQuery(\n  $TeamId: ID!\n) {\n  team(id: $TeamId) {\n    name\n    TeamJobboards {\n      id\n      jobboard_id\n      belongsToJobboard {\n        releasePlan {\n          description\n          name\n          id\n        }\n        sprints {\n          sprintType {\n            name\n            id\n          }\n          start_date\n          end_date\n          id\n        }\n        name\n        description\n        active\n        id\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e89f5cb6205536e6ac363ad16a40562d';
module.exports = node;
