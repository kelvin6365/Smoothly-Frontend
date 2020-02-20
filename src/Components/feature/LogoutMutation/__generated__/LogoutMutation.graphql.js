/**
 * @flow
 * @relayHash 378cfd677e45963aeeda411fcc56deaa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LogoutMutationVariables = {||};
export type LogoutMutationResponse = {|
  +logout: {|
    +status: string,
    +message: ?string,
  |}
|};
export type LogoutMutation = {|
  variables: LogoutMutationVariables,
  response: LogoutMutationResponse,
|};
*/


/*
mutation LogoutMutation {
  logout {
    status
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "logout",
    "storageKey": null,
    "args": null,
    "concreteType": "LogoutResponse",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "message",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LogoutMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LogoutMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LogoutMutation",
    "id": null,
    "text": "mutation LogoutMutation {\n  logout {\n    status\n    message\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1fe84ac89f59654a279adc84aba162e9';
module.exports = node;
