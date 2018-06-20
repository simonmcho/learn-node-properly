const exec = require('child_process').exec;
const querystring = require('querystring');

function start(response, postData = '') {
    console.log('Request handler start() was called');
    let content = "empty";

    exec('ls -lah', (error, stdout, stderr) => {

        content = stdout;

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();

    });

//    return content;

}

function longStart(response, postData = '') {
    console.log('Request handler longStart() was called');

    const timeoutObject = { 
        timeout: 5000, 
        maxBuffer: 20000*1024
    };

    exec("find /", timeoutObject, (...args) => {

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(args[1]);
        response.end();

    });

}

function postForm(response, postData = '') {
    console.log("Request handler 'postForm' was called");

    const body =
                `<html>` +
                `<head>` +
                `<meta http-equiv="Content-Type" content="text/html; ` +
                `charset=UTF-8" />` +
                `</head>` +
                `<body>` +
                `<form action="/upload" method="post">` +
                `<textarea name="text" rows="20" cols="60"></textarea>` +
                `<input type="submit" value="Submit text" />` +
                `</form>` +
                `</body>` +
                `</html>`;

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function upload(response, postData = '') {
    console.log('Request handler upload() was called');
    const queriedText = querystring.parse(postData).text;
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(`Uploaded! You've set ${queriedText}`);
    response.end();
    //return "Hello upload!";
}

module.exports = {
    start : start,
    longStart : longStart,
    postForm : postForm,
    upload : upload
}
