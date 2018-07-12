const stateToProps = require('./lib/stateToProps')
const gettersToProps = require('./lib/gettersToProps')
const mutationsToProps = require('./lib/mutationsToProps')
const mutationsToEvents = require('./lib/mutationsToEvents')
const actionsToProps = require('./lib/actionsToProps')
const actionsToEvents = require('./lib/actionsToEvents')

module.exports = {
  stateToProps: stateToProps,
  gettersToProps: gettersToProps,
  mutationsToProps: mutationsToProps,
  mutationsToEvents: mutationsToEvents,
  actionsToEvents: actionsToEvents,
  actionsToProps: actionsToProps,
}
