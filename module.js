/* Sleep function for Node.
 * 
 * @package system-sleep
 * @version 1.3.7
 * @author Jochem Stoel (http://jochemstoel.github.io)
 * @license don't involve me
 */

const sleep = interval => new Promise((deliver, renege) => {
	if(typeof interval != 'number' || interval < 1) deliver(
		new Date().getTime()
	)
	try {
		setTimeout(() => {
			deliver(
				new Date().getTime()
			)
		}, interval)
	} catch (exception) {
		renege(
			exception.message
		)
	}
})

module.exports = interval => {
	if(typeof interval != 'number' || interval < 1) 
		return new Date().getTime()
	try {
		return require('deasync-promise')(
			sleep(interval)
		)
	} catch (notAsync) { /* https://github.com/jochemstoel/nodejs-system-sleep/issues/4 */
		require('child_process').execSync(
			`"${process.execPath}"` + " -e \"setTimeout(function () { return true; }, " + interval + ");\""
		)
		return null
	}
}
