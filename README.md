# vuex-connect-namespace-helper

A binding namespaced module helper for vuex-connect.

## Example

```js
const store = new Vuex.Store({
  state: {
    foo: 'foo',
  },
  modules: {
    moduleName: {
      namespaced: true,
      state: {
        bar: 'bar',
      },
      mutations: {
        barMutation(state, payload) {
          state.bar = payload
        },
      },
      actions: {
        barAction({ commit }, payload) {
          commit('barMutation', payload)
        },
      },
      getters: {
        barbar: state => state.bar + state.bar,
      },
    },
  },
})
```

```js
import { connect } from 'vuex-connect'
import {
  stateToProps,
  gettersToProps,
  mutationsToEvents,
  mutationsToProps,
  actionsToEvents,
  actionsToProps,
} from 'vuex-connect-namespace-helper'
import MyComponent from './MyComponent'

export default connect({
  stateToProps: {
    foo: 'foo',
    ...stateToProps('moduleName', {
      bar: 'bar',
    }),
  },
  gettersToProps: gettersToProps('moduleName', {
    barbar: 'barbar',
  }),
  mutationsToProps: mutationsToProps('moduleName', {
    testMutation: 'barMutation',
  }),
  mutationsToEvents: mutationsToEvents('moduleName', {
    testMutationEvent: 'barMutation',
  }),
  actionsToProps: actionsToProps('moduleName', {
    testAction: 'barAction',
  }),
  actionsToEvents: actionsToEvents('moduleName', {
    testActionEvent: 'barAction',
  }),
})(MyComponent)
```

## API

`helperFunction(namespace, options) -> Object`

- `stateToProps`
- `gettersToProps`
- `mutationsToEvents`
- `mutationsToProps`
- `actionsToEvents`
- `actionsToProps`
