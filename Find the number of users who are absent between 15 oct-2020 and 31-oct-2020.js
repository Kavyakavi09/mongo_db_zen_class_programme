db.getCollection("attendance").aggregate(

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
                no_of_users_absent :{
                    $size:"$absent"
                },
                _id:0,
                date:1,
                no_of_users_absent:1
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);