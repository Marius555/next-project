/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k717l3wiykc807d",
    "created": "2023-09-09 20:51:31.875Z",
    "updated": "2023-09-09 20:51:31.875Z",
    "name": "Post",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fmvmn9s1",
        "name": "usr",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "380acekuaex801z",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "7vutumhr",
        "name": "post",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k717l3wiykc807d");

  return dao.deleteCollection(collection);
})
