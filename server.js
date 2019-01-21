const routes=require('./routes');
const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const errorhandler=require('errorhandler');
let app=express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(errorhandler());
app.use('/',routes.blogapp);


app.listen(3000);
console.log('server started');







