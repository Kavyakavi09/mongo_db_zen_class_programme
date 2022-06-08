db.getCollection("users").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $project: {
                // specifications
                _id:0,
                user_name:1,
                email_id:1,
                batch_id:1,
                no_of_problems_solved:{
                    $size:"$codekata_solved"
                }   
            }
        }
    ],

    // Options
    {

    }



);
