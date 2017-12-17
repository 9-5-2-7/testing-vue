import { mount } from 'vue-test-utils'
import Counter from '../src/components/Counter.vue'
import expect from 'expect'

describe('Counter', () => {
  // every test it should contain it own `wrapper`
  // you also can do this:
  let wrapper

  beforeEach(() => {
    wrapper = mount(Counter)
  })


  it ('defaults to a count of 0', () => {
    // let wrapper = mount(Counter)

    expect(wrapper.vm.count).toBe(0)
  })

  it ('increments the count when the increment is clicked', () => {
    // let wrapper = mount(Counter)

    expect(wrapper.vm.count).toBe(0)

    wrapper.find('.increment').trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })

  it ('decrements the count when the decrement is clicked', () => {
    // let wrapper = mount(Counter)

    expect(wrapper.vm.count).toBe(0)

    // wrapper.find('.increment').trigger('click') // 1
    // wrapper.find('.increment').trigger('click') // 2

    // refer to vm.$data.count
    wrapper.setData({
      count: 5
    })

    wrapper.find('.decrement').trigger('click') // 1

    // expect(wrapper.vm.count).toBe(1)
    expect(wrapper.vm.count).toBe(4)
  })


  // it.only ('desc', () =>) // only run this test
  it.only ('never goes below 0', () => {
    expect(wrapper.vm.count).toBe(0)

    // test when vm.count > 0, show `decrement btn`
    expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(true)

    wrapper.find('.increment').trigger('click') // 1
    // wrapper.setData({ count: 1 }) // if you don't need UI, just setData

    expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(false)
  })


  it ('presents the current count', () => {
    // let wrapper = mount(Counter)

    expect(wrapper.find('.count').html()).toContain(0)

    wrapper.find('button').trigger('click')

    expect(wrapper.find('.count').html()).toContain(1)
  })

})