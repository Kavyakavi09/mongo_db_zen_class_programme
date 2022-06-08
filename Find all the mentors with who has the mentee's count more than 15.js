db.getCollection("mentors").find(
    {
        "$where": "this.student_id_list.length > 15"
    }, 
    {
        "mentor_name": 1.0,
        "email_id": 1.0,
        "no_of_student": {
            "$size": "$student_id_list"
        },
        "_id": 0.0
    }
)
