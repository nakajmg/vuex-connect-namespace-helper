function stateToProps(namespace, options) {
  if (Array.isArray(options)) {
    return options.reduce((ret, key) => {
      ret[key] = state => state[namespace][key]
      return ret
    }, {})
  }
  return Object.keys(options).reduce((ret, key) => {
    const value = options[key]
    ret[key] = state => state[namespace][value]
    return ret
  }, {})
}

module.exports = stateToProps
