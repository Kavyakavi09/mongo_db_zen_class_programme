db.getCollection("tasks").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $match: {
                // enter query here
                "date": {
                        "$gte": ISODate("2020-10-15T00:00:00.000Z"),
                        "$lte": ISODate("2020-10-31T00:00:00.000Z")
                    }
            }
        },

        // Stage 2
        {
            $project: {
                // specifications
                not_submitted :{
                    $size:"$not_submitted"
                },
                _id:0,
                task_id:1,
                task_name:1,
                not_submitted:1,
                date:1
                
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);