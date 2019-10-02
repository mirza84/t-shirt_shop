import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('App', () => {
  test('does page load', () => {
    const wrapper = mount(App)
    expect(wrapper.pageLoad()).toBeTruthy()
  })
  test('renders template', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toMatch('T-Shirt Shop')
  })
})

describe('tShirtConfig', () => {
  test('val av storlek', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addSize('L')
    expect(wrapper.vm.tshirt.size).toEqual('L')
  })
  test('val av färg', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addColor('green')
    expect(wrapper.vm.tshirt.color).toEqual('green')
  })
  test('text på t-shirt', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addText('Sudo')
    expect(wrapper.vm.tshirt.text).toEqual('Sudo')
  })
  
})