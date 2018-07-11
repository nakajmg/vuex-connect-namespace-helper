const mappingNamespace = require('./mappingNamespace')

function mutationsToProps(namespace, options) {
  return mappingNamespace(namespace, options)
}

module.exports = mutationsToProps
