const config = require('./config');
const jsonServer = require('json-server');
const dbfile = require(config.DB);

const ip = config.SERVER;
const port = config.PORT;
const db_file = config.DB;

const server = jsonServer.create();
const router = jsonServer.router(dbfile());
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);


server.use("/api",router);
server.use(router);

server.listen({
    host: ip,
    port: port,
}, function() {
    console.log(`JSON Server is running in http://${ip}:${port}`);
});
