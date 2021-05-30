
# Node JS Tutorial Series

***
**  Lesson-24 | The Event Loop
* 
*  1. Event loops executes callback once the job is finished and notfied to the event loop.
*  2. But the question is that, Is Event loop is able to run multiple callbacks / Jobs simultenously *     even though JS is a single threaded language.
*  3. Whenever you run a node js programming, An `Event loop` is executed inside nodeuv.
*  4. The code of event loop is as follows.
***         while(!shouldExit) {
***             processEvents();
***         }

*  5. As per the above loop, until the node js exists, it continusly process events and exectues *        callback. If no events available, it will wait for the event.
