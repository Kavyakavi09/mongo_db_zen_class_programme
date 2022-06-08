db.getCollection("company_drives").find(
    {}, 
    {
        "_id": 0.0,
        "company_name": 1.0,
        "interview_date": 1.0,
        "student_id_list": 1.0
    }
)
