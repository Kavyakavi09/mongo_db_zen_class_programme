db.getCollection("attendance").insertMany([
{"topic_id":1,"date":new Date("2020-10-15"),"present": [1,2,4], "absent": [3,5]},
{"topic_id":2,"date":new Date("2020-10-16"),"present": [2,3,4,5], "absent": [1]},
{"topic_id":3,"date":new Date("2020-10-17"),"present": [1,3,4,5], "absent": [2]},
{"topic_id":4,"date":new Date("2020-10-18"),"present": [1,2,3,5], "absent": [4]},
{"topic_id":5,"date":new Date("2020-10-19"),"present": [1,2,4,5], "absent": [3]}
]);
