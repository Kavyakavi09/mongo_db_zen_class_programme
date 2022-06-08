db.getCollection("users").insertMany([
    { "user_id": 1, "user_name": "user1", "email_id": "user1@gmail.com", "batch_id": 32, "codekata_solved": [1,2,3] },
    { "user_id": 2, "user_name": "user2", "email_id": "user2@gmail.com", "batch_id": 32, "codekata_solved": [2,3] },
    { "user_id": 3, "user_name": "user3", "email_id": "user3@gmail.com", "batch_id": 32, "codekata_solved": [3,5] },
    { "user_id": 4, "user_name": "user4", "email_id": "user4@gmail.com", "batch_id": 32, "codekata_solved": [1,2,3,4] },
    { "user_id": 5, "user_name": "user5", "email_id": "user5@gmail.com", "batch_id": 32, "codekata_solved": [4,5] }
]);
