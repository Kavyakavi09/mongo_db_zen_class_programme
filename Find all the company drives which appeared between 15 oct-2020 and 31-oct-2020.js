db.getCollection("company_drives").find(
    {
        "interview_date": {
            "$gte": ISODate("2020-10-15T00:00:00.000Z"),
            "$lte": ISODate("2020-10-31T00:00:00.000Z")
        }
    }, 
    {
        "_id": 0.0,
        "company_name": 1.0,
        "interview_date": 1.0
    }
)
