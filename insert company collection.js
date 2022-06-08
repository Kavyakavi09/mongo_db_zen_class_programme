db.getCollection("company_drives").insertMany([
{"id":1,"company_name":"zoho","interview_date":new Date("2020-10-10"),"student_id_list":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},
{"id":2,"company_name":"amazon","interview_date":new Date("2020-10-14"),"student_id_list":[17,18,19,20]},
{"id":3,"company_name":"flipkart","interview_date":new Date("2020-10-17"),"student_id_list":[21,22,23,24]},
{"id":4,"company_name":"paypal","interview_date":new Date("2020-10-20"),"student_id_list":[25,26,27,29]},
{"id":5,"company_name":"infosys","interview_date":new Date("2020-10-29"),"student_id_list":[30,31,33,34]}
]);
