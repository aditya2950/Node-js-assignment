//Implementation of Sorting word paragraph
function Sortpara(mystring){
    for (var i = 0; i < mystring.length; i++) {
        for (var j =i+1; j < mystring.length;j++) {
            if (mystring[i] > mystring[j]){
                var temp = mystring[i]
                mystring[i] = mystring[j]
                mystring[j]  = temp
            }
        }
    
    }
    return mystring;
}

//USer Interface to get Input string
const ps = require('prompt-sync')   //Module to get user input
var prompt = ps()
var para=prompt("Enter any Words of Paragraph to Sorted in aplhabetically:-")
para = para.toLowerCase()
var mystring=para.split(" ")
var S=Sortpara(mystring)
Sortedstr=S.join(" ")
console.log("Sorted String:-",Sortedstr)

//Module to add database
var mysql = require('mysql');

//Mysql Data base connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "mydb"
});


//Store Result into database
con.connect(function(err) {
    if (err) throw err;
    console.log("Mysql connectd");
    
    var sql = "INSERT INTO sortstring VALUES ('"+Sortedstr+"')";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");

    //Query to fetch stored result 
    con.query("select *from sortstring",function(err,result){
    if(err)throw err;
    console.warn("Deta fetch from the Database:-",result);
    });
    
  });
});
