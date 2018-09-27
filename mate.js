const AssertionError = require('assert').AssertionError;
const chalk = require('chalk')

let success = 0
let failure = 0

function describe (description, callback){
  console.log(description)
  callback()

  console.log(chalk.blue(`${success} passing`))
  console.log(chalk.red(`${failure} failing`))
}

function it(description, callback){
  try {
    callback()
    console.log(chalk.blue('✔'), description)
    console.log(' ')
    success++
  } catch(e){
    console.log(chalk.red('✗'), description)
    console.log(`Assertion Error: ${e.message}`)
    console.log(' ')
    failure++
  }
}

module.exports = {
  describe,
  it
}
