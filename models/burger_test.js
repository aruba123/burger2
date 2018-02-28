// Import the burger model to gain access to the database functions

var burger = require('./burgers.js');

// Import the connection file directly, in order to terminate the connection at the end

var connection = require(' ../config/connection.js');

// Select all entries from the database
 burger.selectAll(function (data){
     console.log('burger.selectAll  ENETRESET...\n\n');

     console.log('____________Burger Menu___________\n');

     for (var i = 0; i< data.length; i ++) {

        console.log ('Burger ID = ' + data[i].id);
        console.log( 'Burger Name =' + data[i].burger_name );
        console.log( 'Available= ' + data[i].devoured);
        console.log ('+++++++++++++++++++++++++++');


     }


 });

 //Insert a single  entry into the database

 burger.InsertOne(['burger_name', 'devoured'],
                       ['Late Night Juicy burger',false],

                    function (data) {
                        console.log('\n\burger.insertOne  test...\n\n');
                        console.log('inserted new row with ID= +data...\n\n');
                    }

                );


        // update a single entry in the database

    burger.updateOne({ devoured:true}, 'id=10', function (data){
        console.log ( '\n\n burger.updateOne test ...\n\n');

        console.log (' Result:  '  + data.message);




    });

    connection.end();
