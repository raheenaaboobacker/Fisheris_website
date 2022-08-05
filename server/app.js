const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRouter = require('./src/routes/registerRouter');
const loginRouter=require('./src/routes/loginRouter')


const port = 5000;
 
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());
app.use('/',loginRouter);
app.use('/register',registerRouter);


app.listen(port,function(){
    console.log("server running on localhost: "+ port);
});