from pymongo import MongoClient

client = MongoClient('localhost', 27017,
                     username='test',
                     password='test',
                     authSource='admin',
                     authMechanism='SCRAM-SHA-1'
                     )
db = client.dbmemo


def createMemo(memo):
    result = db.memo.insert_one(memo)
    return result.inserted_id


def getMemos():
    result = db.memo.find({}, {'_id': False})
    return list(result)
