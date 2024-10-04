// make routing using express js 
const app = require('./app')
const PORT = 3000;
const HostName ='127.0.0.1'

app.listen(PORT,HostName,()=>{
    console.log(`Server is runnig http://${HostName}:${PORT}`)
})