const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/longStart'] = requestHandlers.longStart;
handle['/postForm'] = requestHandlers.postForm;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);

// module.exports = app;

/*
http://www.hylianux.com/downloads/nodebeginner.pdf
http://javascriptissexy.com/learn-node-js-completely-and-with-confidence/
*/