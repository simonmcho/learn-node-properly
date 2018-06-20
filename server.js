const http = require('http');
const express = require('express'); // Importing express module
const url = require('url');
const app = express(); // Creating express app

function start(route, handle) {

    app.set('view engine', 'ejs');

    app.use(express.static(__dirname + '/public'));

    function onRequest(request, response) {

        const pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + ' received.');
        
        route(handle, pathname, response);

        // const content = route(handle, pathname);
        // response.write(content);
        // response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started");

    // app.get('/', (req, res) => {
    //     const pathname = url.parse(req.url).pathname;
    //     console.log(`Request for ${pathname} received.`);

    //     const content = route(handle, pathname);

    //     res.send(content);

    // }); // When it gets the route in the specified url, express sends back somehing
        

    // // When someone types in www.test.com/about, fire function.
    // // Function takes req and res, and using res object, render the page
    // app.get('/about', (req, res) => {
    //     const pathname = url.parse(req.url).pathname;
    //     console.log(`Request for ${pathname} received.`);

    //     route(pathname);
        
    //     res.render('about', {
    //         title: "THIS IS TITLE!",
    //         names: {
    //             simon: "simon",
    //             lewis: "lewis",
    //             sandra: "sandra"
    //         }
    //     }); // When getting something.com/about, it will run this function
    //     // When running the cb function, it is taking the response object and renders the page
    //     // It looks for about.ejs. THis is done because we set the view engine to ejs
    // });

}

module.exports.start = start;

