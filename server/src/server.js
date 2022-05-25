const app = require('./app');
const connect = require('./config/db');

const port = process.env.PORT || 3001;

app.listen(port, async () => {
    await connect();
    console.log(`listening to port ${port}`);
});