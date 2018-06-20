const exec = require('child_process').exec;

function start(response) {
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

function longStart(response) {
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

function upload(response) {
    console.log('Request handler upload() was called');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello upload!!!!!");
    response.end();
    //return "Hello upload!";
}

exports.start = start;
exports.longStart = longStart;
exports.upload = upload;

