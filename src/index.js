const express = require('express');
const serverconfig = require('./config/serverconfig.js');
const connectDB = require('./config/dbConfig');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/user_route.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.listen(serverconfig.PORT, async () => {
    await connectDB();
    console.log(`SERVER GOT STARTED ON PORT NO. ${serverconfig.PORT}\n http://localhost:${serverconfig.PORT}`);
});