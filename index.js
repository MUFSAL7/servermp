// importing json server
const jsonServer = require('json-server')

// creating server for mediaplayer application
// create is method for create

const Mpserver = jsonServer.create()

// create middleware
// defaults used for creating middlware 

const middleware = jsonServer.defaults()

// set up route  for json file in server

const route = jsonServer.router('db.json')

// setting port for runing server application

const PORT=3000||process.env.PORT

// use 

Mpserver.use(middleware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`mediaplayer server is running at the ${PORT} a , d waitiing fore client request`);
    
})