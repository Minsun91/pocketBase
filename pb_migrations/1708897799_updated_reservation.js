/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tl97s6gp7wuujk0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ylnjpkq3",
    "name": "date",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "2024-02-26 12:00:00.000Z",
      "max": "2028-02-29 12:00:00.000Z"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tl97s6gp7wuujk0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ylnjpkq3",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
