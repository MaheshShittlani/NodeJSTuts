
# Node JS Tutorial Series

***
**  Lesson-25 | The Callback Queue
 
*  1. As we have learnt that as soon as node js receive request to to executes an asynchronus function *     it is exeucted by `event loop` by executing the callback.
*  2. Each asynchronus function executes callback once the job is done.
*  3. So as soon as asynchronus function exection completes, callback is pushed into callback queue/*     event queue or job queue and executed as gets chance to execute by CPU.
*  4. Tf we go deeper into the `event loop` working, we found that there are multiple callback queues or *     we can say event loop phases.
*  5. Event Loop phases
*       5.1 Timers
*       5.2 I/O Callbacks
*       5.3 setImmediate
*       5.4 Close Callback
*  6. Each of the `event phase` has its own queue.
*  7. Before moving ahead lets see the concept of `Timers` 
        7.1 setTimeout - Executes the callback after a specified time.
        7.2 setInterval - Executes a callback after each interval of time specified.
        7.3 setImmediate - Executes a callback immediately.
    8. In the each cycle of event loop, it passes through the phases int the following order.
        8.1 Timers
        8.2 I/O Callbacks
        8.3 setImmediate
        8.4 Close callback
    9. As one cycle of `event loop` finished, the next cycle will be executed and all the phases will 
       be executed in the above order again.
