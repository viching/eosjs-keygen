const Session = require('./session')
const config = require('./config')

const createHistory = require('history').createMemoryHistory 
config.history = createHistory()

const localStorage = require('localStorage')
config.localStorage

module.exports = Session
