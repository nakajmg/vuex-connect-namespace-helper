const mappingNamespace = require('./mappingNamespace')

function gettersToProps(namespace, options) {
  return mappingNamespace(namespace, options)
}

module.exports = gettersToProps
