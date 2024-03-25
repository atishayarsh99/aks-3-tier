# 3-tierapp

1. npm i 
2. node src\index.js
3. port=3000
4. routes => 
get => localhost:3000/admin/get_data // data get
post => localhost:3000/admin/login // data entry => 
{
    "mobileNumber":"12345678900",
    "firstName":"atishya"
}

5. db_string => mongodb://localhost:27017/test_db
6. new_db_string => put that string into Modules => connection.js file
7. if you changes the main ip then also change in connection.js file.