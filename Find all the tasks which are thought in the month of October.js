db.getCollection("tasks").find(
    {
        "date": {
            "$gte": ISODate("2020-10-01T00:00:00.000Z"),
            "$lte": ISODate("2020-10-31T00:00:00.000Z")
        }
    }, 
    {
        "task_id": 1.0,
        "task_name": 1.0,
        "description": 1.0,
        "date": 1.0
    }
)
