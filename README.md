
# Node JS Tutorial Series

***
**  Lesson-23 | Event Loop
* 
*  1. The truth that make node js is so successful is the abitlity to run javascript code asyncronusly.
*  2. Node Js make it simple to run asyncronus code with worring about the complicated thread logic and *     make developers easy to think about their main logic.
*  3. So the question is if it is not thread, then how node js allows us to execute code ayncronusly.
*  4. Node JS runs a single thread which runs V8 engine or all javascript code including node js api.
*  5. A super important part of libuv is event loop.
*  6. We have seen that all the input/output is handle by libuv which includes input/output through *     file-system or network. The thing which make these input/output asynchronusly 
*     is called `event loop`.
*  7. This `event loop` is code in libuv which executes asynchronus function and executes the callback *     when response is ready.
*  8. In node js whenever asynchronus funtion is called it just simply put into the `event loop`.
*  9. So all the JS code running in a main thread execept that each asynchronus function put into the    *     event loop`.
*  10. Event loop continue monitor the events, and executes the callback as the completion of a 
*      asynchronus function, without blocking the main thread.
*  11. As soon event loop gets a asynchronus function to executes. the libuv checks the tread pool to to *      get a free thread to handle the job and perform the task.
*  12. `Thread pool` is the collection of threads where a number of threads are available, and whenever *       `libuv` need to perform a task we pick a avaiable thread from the tread pool and assign the job. *        It saves time and resource by using the avilable thread not creating and destroying new thread *        each time. See figure `thread-pool-event-loop.png`.
*  13. `libuv` doesn't prefer the that each asynchronus function should be handled by the thread loop. *       As `libuv` is written in C/C++ and able to intract with OS kernal to directly instruct the input/*       output other tasks. see figure `os-kernal-event-loop.png`.
*  14. So in both of the above cases Either (1. A function is exectuted by thread in thread pool) OR (2.*      A function is executed by kernal directly). As the job completes `event loop` is notified by *      emitting and event and event loop executes the related callback to take furhter actions.