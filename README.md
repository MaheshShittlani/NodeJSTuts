
# Node JS Tutorial Series

***
**  Lesson-30 | Observer Pattern?

1. In node js as and event is fired, event loop executes the related callback function.
2. Node js has a module to manually work with events and listeners is call event module.
3. See the documentation of events module in https://nodejs.org/dist/latest-v14.x/docs/api/events.html#events_events
4. As per the official node docs, 
    Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
5. All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.
6. See the example in dev branches.


