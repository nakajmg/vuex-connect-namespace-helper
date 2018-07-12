function stateToProps(namespace, options) {
  if (Array.isArray(options)) {
    return options.reduce(function(ret, key) {
      ret[key] = function(state) {
        return state[namespace][key]
      }
      return ret
    }, {})
  }
  return Object.keys(options).reduce(function(ret, key) {
    const value = options[key]
    ret[key] = function(state) {
      return state[namespace][value]
    }
    return ret
  }, {})
}

module.exports = stateToProps
