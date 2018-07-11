import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { connect } from 'vuex-connect'
import createStore from './store'
import {
  stateToProps,
  gettersToProps,
  mutationsToEvents,
  mutationsToProps,
  actionsToEvents,
  actionsToProps,
} from '../index'
import TestCompoent from './TestComponent'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('vuex-connect-namespace-helper', () => {
  let store
  beforeEach(() => {
    store = createStore()
  })

  it('binds namespaced state to component props', () => {
    const ConnectedTestComponent = connect({
      stateToProps: stateToProps('module', {
        bar: 'bar',
      }),
    })(TestCompoent)
    const connected = mountContainer(store, ConnectedTestComponent)
    expect(connected.bar).toBe('bar')
  })

  it('binds namespaced getters to component props', () => {
    const ConnectedTestComponent = connect({
      gettersToProps: gettersToProps('module', {
        bar: 'bar',
      }),
    })(TestCompoent)
    const connected = mountContainer(store, ConnectedTestComponent)
    expect(connected.bar).toBe('bar')
  })

  it('binds namespaced mutations to component props', async () => {
    const ConnectedTestComponent = connect({
      stateToProps: stateToProps('module', {
        bar: 'bar',
      }),
      mutationsToProps: mutationsToProps('module', {
        TEST: 'TEST',
      }),
    })(TestCompoent)
    const connected = mountContainer(store, ConnectedTestComponent)
    connected.TEST('barbar')
    await connected.$nextTick()
    expect(connected.bar).toBe('barbar')
  })

  it('binds namespaced mutations to component events', async () => {
    const ConnectedTestComponent = connect({
      stateToProps: stateToProps('module', {
        bar: 'bar',
      }),
      mutationsToEvents: mutationsToEvents('module', {
        a: 'TEST',
      }),
    })(TestCompoent)
    const connected = mountContainer(store, ConnectedTestComponent)
    connected.$emit('a', 'barbar')
    await connected.$nextTick()
    expect(connected.bar).toBe('barbar')
  })

  it('binds namespaced actions to component props', async () => {
    const ConnectedTestComponent = connect({
      stateToProps: stateToProps('module', {
        bar: 'bar',
      }),
      actionsToProps: actionsToProps('module', {
        TEST: 'TEST',
      }),
    })(TestCompoent)
    const connected = mountContainer(store, ConnectedTestComponent)
    connected.TEST('barbar')
    await connected.$nextTick()
    expect(connected.bar).toBe('barbar')
  })

  it('binds namespaced actions to component events', async () => {
    const ConnectedTestComponent = connect({
      stateToProps: stateToProps('module', {
        bar: 'bar',
      }),
      actionsToEvents: actionsToEvents('module', {
        a: 'TEST',
      }),
    })(TestCompoent)
    const connected = mountContainer(store, ConnectedTestComponent)
    connected.$emit('a', 'barbar')
    await connected.$nextTick()
    expect(connected.bar).toBe('barbar')
  })
})

function mountContainer(store, ConnectedTestComponent) {
  const root = new localVue({
    store,
    render(h) {
      return (
        <div>
          <ConnectedTestComponent />
        </div>
      )
    },
  })
  root.$mount()
  return root.$children[0].$children[0]
}
