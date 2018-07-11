const mappingNamespace = require('./mappingNamespace')

function mutationsToEvents(namespace, options) {
  return mappingNamespace(namespace, options)
}

module.exports = mutationsToEvents
