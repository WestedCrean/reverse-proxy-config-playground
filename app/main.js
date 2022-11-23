const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // on response set cookie with name KEYCLOAK_SESSION_ID and path /realm/datalake
    res.cookie('BASE_COOKIE',
        'VALUE_1',
    );
    body = { "message": "Hello World!" }
    if (req.cookies) {
        for (var key in req.cookies) {
            body[key] = { "value": req.cookies[key], "path": req.path }
        }
    }
    // respond with html page static/home.html
    res.sendFile('static/home.html', { root: __dirname });
})

// get /datalake on response set cookie with name KEYCLOAK_SESSION_ID and path /realm/datalake
app.get('/realm/datalake', (req, res) => {
    res.cookie('DATALAKE_COOKIE_PATH',
        'DATALAKE_COOKIE_VALUE',
        // set cookie on path /realm/datalake
        { path: '/realm/datalake' }
    );
    res.sendFile('static/datalake.html', { root: __dirname });
})


// get /app
app.get('/app', (req, res) => {
    body = { "message": "Hello App!" }
    res.cookie('APP_COOKIE',
        'VALUE_1',
    );
    if (req.cookies) {
        for (var key in req.cookies) {
            body[key] = { "value": req.cookies[key], "path": req.path }
        }
    }
    res.sendFile('static/app.html', { root: __dirname });
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

