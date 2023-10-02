const uws = require('uWebSockets.js')
const fs = require('fs')

const port = 8080

const data = fs.readFileSync('test.json')

const app = uws.App({})

app.get('/data', (res, req) => {
    res.writeHeader('Access-Control-Allow-Origin', '*')
    res.writeHeader('Access-Control-Allow-Methods', '*')
    res.writeHeader('Access-Control-Allow-Credentials', 'true')
    res.writeHeader('Content-Type', 'application/json')
    res.end(data)
})

app.listen(port, (token) => {
    if (token) {
        console.log('Listening to port ' + port)
    } else {
        console.log('Failed to listen to port ' + port)
    }
})