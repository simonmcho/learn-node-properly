const http = require('http');
const express = require('express'); // Importing express module
const url = require('url');
const app = express(); // Creating express app

function start(route, handle) {

    app.set('view engine', 'ejs');

    app.use(express.static(__dirname + '/public'));

    function onRequest(request, response) {

        const pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        route(handle, pathname, response, request);


        ////////////////////////////////////////////////////////////////
        // let postData = '';
        // const pathname = url.parse(request.url).pathname;
        // console.log('Request for ' + pathname + ' received.');

        // request.setEncoding('utf8');

        // request.addListener('data', postDataChunk => {

        //     postData += postDataChunk;
        //     console.log("Received POST data chunk " + postDataChunk + "'.");

        // });

        // request.addListener('end', () => {

        //     route(handle, pathname, response, postData);

        // });
        ////////////////////////////////////////////////////////////////
        // const pathname = url.parse(request.url).pathname;
        // route(handle, pathname, response);
        ////////////////////////////////
        // const content = route(handle, pathname);
        // response.write(content);
        // response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started");

}

module.exports.start = start;

