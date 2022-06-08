db.getCollection("topics").find(
    {
        "date": {
            "$gte": ISODate("2020-10-01T00:00:00.000Z"),
            "$lte": ISODate("2020-10-31T00:00:00.000Z")
        }
    }, 
    {
        "id": 1.0,
        "name": 1.0,
        "date": 1.0
    }
)
