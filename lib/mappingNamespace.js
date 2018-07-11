function mappingNamespace(namespace, options) {
  return Object.keys(options).reduce((ret, key) => {
    const type = options[key]
    ret[key] = `${namespace}/${type}`
    return ret
  }, {})
}

module.exports = mappingNamespace
