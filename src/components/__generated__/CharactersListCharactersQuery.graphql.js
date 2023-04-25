/**
 * @generated SignedSource<<af8d58133e053cf191dd0d5fa2f52c2d>>
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
    "name": "CharactersListCharactersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CharactersListCharactersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e921a3eb2a37794035fb0eb496690283",
    "id": null,
    "metadata": {},
    "name": "CharactersListCharactersQuery",
    "operationKind": "query",
    "text": "query CharactersListCharactersQuery {\n  characters {\n    results {\n      id\n      name\n      image\n    }\n  }\n}\n"
  }
};
})();

node.hash = "a23c01596d12a5f1b276ca05ab350726";

module.exports = node;
