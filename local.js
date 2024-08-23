const http = require('http')
const port = 3000
const fs = require('fs')
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type' : 'text/html '})
    fs.readFile('mini.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error : File is not founding..!')
    }
    else{
        res.write(data)
    }
    res.end()
})

})
server.listen(port, function(error){
    if(error){
        console.log('Something went Wrong..!',error)
    }
    else{
        console.log('Server is Listening to '+ port)
    }

})