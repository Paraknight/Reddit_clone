const express = require('express');
const bodyParser = require('body-parser');
const { dbConn, env, session } = require('./Functions');
const { client } = require('./Routers');

const app = express();

dbConn.connect();

app.set('json spaces', 2);
app.use(require('helmet')());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(session);

app.use(client);

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

const listener = app.listen(3000, () => {
  console.log('Application is live on port 3000');
});
if (env.env === 'prod') {
  https.createServer({
    cert: fs.readFileSync(path.resolve(__dirname, env.certFullChainPath)),
    key: fs.readFileSync(path.resolve(__dirname, env.certPrivateKeyPath)),
  }, app).listen(443);
} else {
  http.createServer(app).listen(3000);
}
