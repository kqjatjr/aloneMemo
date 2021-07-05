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
    # find({찾을조건}, {찾으며 원하지 않는 조건 : False})
    # {} '_id' : False } : _id값은 빼고 가져옵니다.
    result = db.memo.find({}, {'_id': False})
    return list(result)
