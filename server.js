//  Pull in the required dependecies 

   var express = require ('express');
   var bodyParser  = require('body-parser');
   var methodOverride = require('method-override');


   var  port = process.env.PORT || 3000;

   var app = express ();

   // Server static content for app from the 'public'  directory
   app.use (express.static(process.cwd() + '/public'));

   app.use(bodyParser.urlencoded({ extended:false}));

   //   Override with POST having ? _method= DELETE
   app.use (methodOverride('_method'));

   // Set Handlebars as the view engine 

   var exphbs = require ('express-handlebars');

   app.engine ('handlebars', exphbs ({defaultLayout: 'main'}));
   app.set ( 'view engine', 'handlebars');

   // Import routes and give the server access gto them 

   var routes = require ( './controllers/burgers_controller.js');
   app.use ('/', routes);

   app.listen (port, function (){
       console.log('listening on port 3000')
   });