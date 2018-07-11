const mappingNamespace = require('./mappingNamespace')

function actionsToEvents(namespace, options) {
  return mappingNamespace(namespace, options)
}

module.exports = actionsToEvents
