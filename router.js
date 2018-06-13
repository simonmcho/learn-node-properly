function route(handle, pathname) {
    console.log(`About to route a request for ${pathname}`);

    if(typeof handle[pathname] === 'function') {
        return handle[pathname](); //handle['/'], which is requestHandlers.start
    } else {
        console.log('No request handler found for ' + pathname);
        return "404 not found";
    }
}

module.exports.route = route;