/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tl97s6gp7wuujk0")

  collection.viewRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ylnjpkq3",
    "name": "date",
    "type": "date",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tl97s6gp7wuujk0")

  collection.viewRule = ""

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
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
