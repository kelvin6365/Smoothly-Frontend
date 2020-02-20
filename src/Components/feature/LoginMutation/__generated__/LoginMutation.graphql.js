/**
 * @flow
 * @relayHash 865a7f416f54c96ba16802c6d15b6f9e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginInput = {|
  username: string,
  password: string,
|};
export type LoginMutationVariables = {|
  data?: ?LoginInput
|};
export type LoginMutationResponse = {|
  +login: {|
    +access_token: string,
    +refresh_token: string,
    +user: {|
      +id: string,
      +name: string,
      +username: string,
      +user_type: string,
      +UserPermissions: $ReadOnlyArray<{|
        +permission_id: string,
        +permission: ?{|
          +permission_type: string
        |},
      |}>,
      +email: string,
      +userDetail: ?{|
        +team_id: string,
        +job_title: string,
        +location: string,
      |},
    |},
  |}
|};
export type LoginMutation = {|
  variables: LoginMutationVariables,
  response: LoginMutationResponse,
|};
*/


/*
mutation LoginMutation(
  $data: LoginInput
) {
  login(data: $data) {
    access_token
    refresh_token
    user {
      id
      name
      username
      user_type
      UserPermissions {
        permission_id
        permission {
          permission_type
          id
        }
        id
      }
      email
      userDetail {
        team_id
        job_title
        location
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "data",
    "type": "LoginInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "data",
    "variableName": "data"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "access_token",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "refresh_token",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "user_type",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permission_id",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permission_type",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "team_id",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "job_title",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "location",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LoginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AuthPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "UserPermissions",
                "storageKey": null,
                "args": null,
                "concreteType": "UserPermission",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "permission",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Permission",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/)
                    ]
                  }
                ]
              },
              (v10/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "userDetail",
                "storageKey": null,
                "args": null,
                "concreteType": "UserDetail",
                "plural": false,
                "selections": [
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/)
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
    "name": "LoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AuthPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "UserPermissions",
                "storageKey": null,
                "args": null,
                "concreteType": "UserPermission",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "permission",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Permission",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      (v4/*: any*/)
                    ]
                  },
                  (v4/*: any*/)
                ]
              },
              (v10/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "userDetail",
                "storageKey": null,
                "args": null,
                "concreteType": "UserDetail",
                "plural": false,
                "selections": [
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v4/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginMutation",
    "id": null,
    "text": "mutation LoginMutation(\n  $data: LoginInput\n) {\n  login(data: $data) {\n    access_token\n    refresh_token\n    user {\n      id\n      name\n      username\n      user_type\n      UserPermissions {\n        permission_id\n        permission {\n          permission_type\n          id\n        }\n        id\n      }\n      email\n      userDetail {\n        team_id\n        job_title\n        location\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57704479cbd9d792c199f3bbfe062343';
module.exports = node;
