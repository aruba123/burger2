// Import the MySQL connection object

var connection =  require ( './connection.js');


// Helper function for generating MySQL syntax 
 function printquestionMarks(num) {
     var arr = [];
    
    for (var i =0; i<num; i++){
        arr.push("?");
    }

    return  arr.toString();

 }

 // Helper function for generating MySQl syntax

 function objToSql(ob) {

    var arr = [];
    
    for ( var key in ob){

        arr.push( key + "=" + ob[Key]);
    }
    return arr.toString();

 }

 // Create the ORM objects to perform SQL queries

 var orm = {

    // Function that returns all table entries 
  selectAll:  function (tableInput, cb){

// Contruct the query string that returns all rows from the target table

  var queryString = "SELECT * FROM " + tableInput + ";" ;

  // Perform the database query 

  connection.query (queryString, function (err, result) {

     if (err)  throw err;
// return results in callback 
     cb(result);
            
  });

  

 



    

 },

 // function that insert a single table entry 

   insertOne:function (table,  cols, vals,cb) {
       // Contruct the query string that inserts a singlr row into the target table 

var  queryString = "INSERT INTO " + table;

        queryString += "( ";
        queryString += cols.toString();
        queryString += ")" ;
        queryString += " VALUES  (";
        queryString += printquestionMarks(vals.length);
        queryString += ")";

    // Console.log (queryString);

    // perform the database query

    connection.query(queryString, val , function (err,result){
        if (err) {

            throw err ; 

        }
       // return results in callback 

        cb(result);


       });

    },
// function  that update a single table entry 

updateOne: function (table, objColVals, condition, cb){

    // Contruct the query string that updates a single entry in the target table 

    var queryString = "UPDATE" + table;


queryString = "UPDATE" + table 

queryString += "SET" ;
queryString += objToSql(objColVals);

 queryString += "WHERE";
 queryString += condition;

 //console.log (querystring);

 //Perform the database query

 condition.query (queryString,function (err,result){
        if (err)  {
            throw err;
        }
// Return results in callback 
 cb (result);

 });

}

};

// Export the orm object for use in other modules 

 module.exports= orm;
 



        
        
        
        
        
    



   


 