const mappingNamespace = require('./mappingNamespace')

function actionsToProps(namespace, options) {
  return mappingNamespace(namespace, options)
}

module.exports = actionsToProps
