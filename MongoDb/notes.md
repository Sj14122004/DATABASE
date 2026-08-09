Mongo shell => it is used to run the command of the mongo db and to perform the crud operation on the database

when  we open mongo shell mogodb by default create the temp database

Data inserted in the mongodb database in the BSON format which is also called Binary JSOn.
JSON store in the text format and BSON store data in the binary format and JSON is space inefficient and but the BSOn is space efficient.BSON support multiple data types to store but JSON limit the data types to store.BSON data is only readed by the machine not by human but the json data is readed by the human and machine both

we will give the data to mangodb in the json format.it automatically convert the data in the BSON format

In the mogodb data stored in th form of document(BSON docs).Collections of the document is called the collection

TO insert in the Mongodb we use

db.collection.insertOne()=> used to store the single document
db.collection.insertMany()=> used ot store the multiple document

db.collection.findOne()
db.collection.find ()

db.collection.find({marks: {$gt: 75}})

db.collection.updateOne(<filter>,<update>,<options>)