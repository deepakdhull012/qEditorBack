const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const PORT = process.env.PORT || 5000;
// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://pooja:p123456@ds161724.mlab.com:61724/qeditor';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('success', console.log.bind(console, 'MongoDB connection success:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/user',user);
app.use('/',(req,res)=>{
    res.send('Server Running')
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


