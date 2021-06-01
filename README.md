
# Node JS Tutorial Series

***
**  Lesson-27 | Node JS Ecosystem

1. Why node js is so popular even the php and python are running web languages.
2. So php like language need web server like apache or nginx to process the web request.
3. So in php, each client request is sent to the server and server create a new seperate thread to       process each thread. 
4. For heavy loading website Http server need more thread that cause failure most of the time.
5. In node js, As each request is send to node js runtime and handled by v8 engine, v8 engine deligate request to the livuv which intern process the request by using a thread from the thread pool or directly interacting with OS.
6. So node js easily handles a heavy loading.
7. The most importantly, node js prvides most efficient way to handles the asynchronus request in background.
