# Sleep()
for those who need Sleep() just like me.
```
 @package system-sleep
 @version 1.0
 @author Jochem Stoel (http://jochemstoel.github.io)
 @license don't involve me
 ```
* will make the system wait xxx milliseconds.
* can be used to delay script execution.
* is often used to relax the system in between resource intensive tasks.
* requires Node to be installed (using portable binary? pfff, see end of document)
* asynchronously executes child process (Node) 
* works on every platform x86 + x64 Windows / Linux / OSX



* Existing sleep() solutions use a blocking while loop which uses 100% CPU. This is incredibly stupid.
* Also, many sleep() solutions are only for Windows or only for Linux.

### Install using NPM
```bash
npm install system-sleep
```
### Use
```javascript
var sleep = require('system-sleep');
sleep(5000); // 5 seconds
```
### Test
Prints <i><a>variable y</a></i> to the console every 1 second during 10 seconds.
```javascript
var sleep = require('system-sleep');
for (y = 0; y < 10; y++) {
	console.log(y);
	sleep(1000);
}
```
## Using portable Node?
Module <a href="https://www.npmjs.com/package/system-sleep">system-sleep</a> executes Node process from (any) current directory. This means it assumes you can run "node yourscript.js" from any directory you want. If you are using a portable binary of Node (Node.exe can only be run from your custom location) then modify module.js by replacing <b>node</b> with the <b>full path</b> to node.

* Open node_modules\system-sleep\module.js
* Replace <i><a>node</a></i> with <i><a>your-node-directory/node</a></i>

If your portable Node.exe is located in c:/my-app/nodejs/   then change this
```javascript
return exec('node "' + __dirname + '/exec.js" ' + $delay);
```
into this
```javascript
return exec('c:/my-app/nodejs/node.exe "' + __dirname + '/exec.js" ' + $delay);
```


<img alt="Jochem Stoel" src="http://33.media.tumblr.com/avatar_048a728a1488_128.png" style="float: left;">
### Jochem Stoel
Involuntary public figure.
* <a href="https://www.npmjs.com/~jochemstoel">https://www.npmjs.com/~jochemstoel</a>
* <a href="http://jochemstoel.nl/">http://jochemstoel.nl/</a>
* <a href="http://jochemstoel.github.io/">http://jochemstoel.github.io/</a>
* <a href="http://jochemstoel.tumblr.com/">http://jochemstoel.tumblr.com/</a>
