import util from 'util'

const name = 'Jim'
const encoder = new util.TextEncoder()
const secretName = encoder.encode(name)

console.log(secretName)
