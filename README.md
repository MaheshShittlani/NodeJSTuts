
# Node JS Tutorial Series

***
**  Lesson-15 | What node js do?
* 
*  1. Node js enable your system can run JS outside the browser using V8 engine.
*  2. Node js not only runs JS outside the browser, but it is a complete runtime.
*  3. As node js is a complete runtime it contains so many components are listed below...
*       3.1 V8
*       3.2 Node JS Api - fs, http, path, crypto
*       3.3 Node JS Bindings
*       3.4 libuv
*  4. Some of the node js modules/api are written in low level lanuage like C/C++ that can directly run *       on the machine.
*  5. These api are independently by libuv in platform dependent manner and node js binding make it 
*       possible to bind the api implementation from node js API to implementation.

--------------------------------------------------------------------------------------------------------

***
**  Lesson-16 | What node js do?
*
*   1. As node js is open source runtime and it is available on https://github.com/nodejs/node
*   2. As we know nodejs runtime has some node js api which is emplemented in `lib` directory in the *      above repository. In the lib directory each module is implemented in its seperate file.
*   3. Even some api are uses the native C/C++ code which is implemented by node js binding. All the    *      node js binding modules are implemented in the `src` directory in the above repository. Which *      further calls `libuv` implementation. All the libuv implemented function are prefixed with uv_
