/**
 * @generated SignedSource<<2233b06c60a76d60c860858b13b2d4d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Characters",
    "kind": "LinkedField",
    "name": "characters",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Character",
        "kind": "LinkedField",
        "name": "results",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "image",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppCharactersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppCharactersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "dc1c17dd40eaac377525f50ddeb65be3",
    "id": null,
    "metadata": {},
    "name": "AppCharactersQuery",
    "operationKind": "query",
    "text": "query AppCharactersQuery {\n  characters {\n    results {\n      id\n      name\n      image\n    }\n  }\n}\n"
  }
};
})();

node.hash = "d35dee06ca88d77ffb2619da63f269cd";

module.exports = node;
