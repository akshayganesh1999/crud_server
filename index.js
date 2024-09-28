// importing json-server library
const jsonServer=require('json-server')

// creating server instance 
const mpServer=jsonServer.create()

// getting default middlewares
const middleware=jsonServer.defaults()

// setting routes for resorces
const routes=jsonServer.router('db.json')

// configuring server
mpServer.use(middleware)
mpServer.use(routes)

const PORT=3000 || process.env.PORT

mpServer.listen(PORT,()=>{
    console.log('Server is running at:'+PORT)
})