
# Node JS Tutorial Series

***
**  Lesson-20 | Non-blocking functions
* 
*  1. Generally functions performs some task and occupy the CPU cycles, like if you call 
*     JSON.stringify() function it converts your json into string. but it doesn't take to much time to *     executed so CPU is not free while executing this funcdtion.
*  2. But some functions takes time to exeutes like setTimeout(), readFile(), reading files from a      *     network, making network request.  For this type of functions cpu gives the instruction to related *     device like Harddisk or network card and sitting ideal until the finish their operations. If these *     functions are perform in syncronus manner the waste to much CPU cycles. As these functions are *     called `Non Blocking Functions`.
*  3. So Until other devices are busy to perform in task, till the CPU can jump to the next asyncronus *     function to executes. or if no task is avaiable CPU sits ideal.
