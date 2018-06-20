## Learning Node properly

• Addition details to be determined    
• [Reference](http://www.hylianux.com/downloads/nodebeginner.pdf)    

### June 18 - WIP (Ended at Page 40)
• `index.js` is ran via node    
• Importing `server.js`, `router.js`, and `requestHandlers.js`    
• The `requestHandlers` functions are stored as values of an object called `handle` in `index.js`    
• `router`'s `route` function is passed in as the first argument to `server.js`    
• The object that holds the `requestHandlers` functions is passed in as the second argument to `server.js`    
• `server.js` takes the `route` function, uses the `handle` object as an argument    
• the `route` function takes the value of the `handle` object (which is one of the `requestHandlers` function), and returns that to `server.js`'s `start` function. The `start` function stores this in a variable to pass in `response.write()`    

- So in summary, the application layer is `request handler` --> `router` --> `server`    

### June 20 - WIP (Ended at Page 49)
• We are now introducing non-blocking operations    
• We are using a node module called `child_process`, which takes in an arguments for a shell command as well as options and a callback function    
• This allows asynchronous executions to operate such that non-blocking processes take place    
• `router.js`'s `route` function now takes in a 3rd argument, which is the `response` object from the server    
• We can pass in the `reponse` object to the `requestHandler` by first passing it into the `route` function    
• Based on the condition of the url `pathname`, `route` will return the appropriate function, as usual    
• The `requestHandler`'s appropriate function now executes, where the async executions occur    
• Remember, node is single-threaded, so it when it is executing something, that execution needs to be complete before it moves on to the next execution    