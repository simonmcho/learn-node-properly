function route(handle, pathname) {
    console.log(`About to route a request for ${pathname}`);

    if(typeof handle[pathname] === 'function') {
        handle[pathname](); //handle['/'], which is requestHandlers.start
    } else {
        console.log('No request handler found for ' + pathname);
    }
}

module.exports.route = route;