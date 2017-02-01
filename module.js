/* Sleep function for Node.
 * 
 * @package system-sleep
 * @version 1.0
 * @author Jochem Stoel (http://jochemstoel.github.io)
 * @license don't involve me
 */
const sleep = interval => new Promise((deliver, renege) => {
	try {
		setTimeout(()=>{
			deliver(new Date().getTime())
		}, interval)
	} catch (exception) {
		renege(exception.message)
	}
})
module.exports = interval => require('deasync-promise')(sleep(interval))