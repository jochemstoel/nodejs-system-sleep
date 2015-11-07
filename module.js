/* Sleep function for Node.
 * 
 * @package system-sleep
 * @version 1.0
 * @author Jochem Stoel (http://jochemstoel.github.io)
 * @license don't involve me
 */

module.exports = function ($delay) {
	var exec = require('child_process').execSync;
	return exec('node "' + __dirname + '/exec.js" ' + $delay);
};
