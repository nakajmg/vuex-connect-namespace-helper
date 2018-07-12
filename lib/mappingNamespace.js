function mappingNamespace(namespace, options) {
  return Object.keys(options).reduce(function(ret, key) {
    const type = options[key]
    ret[key] = [namespace, type].join('/')
    return ret
  }, {})
}

module.exports = mappingNamespace
