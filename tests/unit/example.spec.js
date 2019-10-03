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
  test('teckenstil', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.fontStyle('I')
    expect(wrapper.vm.tshirt.text.style).toEqual('I')
  })
  test('teckentyp', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.fontType('Calibri')
    expect(wrapper.vm.tshirt.text.type).toEqual('Calibri')
  })
  test('antal varor', () => {
    const wrapper = mount(tShirtConfig)
    var oldCount = wrapper.vm.tshirt.count
    wrapper.vm.addItem('T-shirt')
    expect(wrapper.vm.tshirt.count).toEqual(oldCount + 1)
  })
  test('ladda upp bild', () => {
    const wrapper = mount(tShirtConfig)
    var picture = wrapper.vm.tshirt.picture   // eller wrapper.vm.picture  ????????
    wrapper.vm.addPicture('mypicture')
    expect(wrapper.vm.tshirt.picture).not.toMatchObject(picture)  // ??????????
  })
  test('val av material', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.material('bomull')
    expect(wrapper.vm.tshirt.material).toEqual('bomull')
  })
  test('visa priset', () => {
    const wrapper = mount(tShirtConfig)
    var stdPrice = wrapper.vm.tshirt.price
    var newPrice = 0
    if (wrapper.vm.tshirt.text > 0){      // kräver att man kör testet "text på t-shirt" innan!!
      newPrice = stdPrice + 50            // 50kr för texten
    }else(newPrice = stdPrice)
    
    if(wrapper.vm.tshirt.material = 'bomull'){
      newPrice = newPrice + 50            // 50kr för bomull. Polyester standard pris
    }
    wrapper.vm.showPrice(newPrice)
    expect(wrapper.vm.tshirt.price).toEqual(newPrice)
  })
  test('skicka order', () => {
    const wrapper = mount(tShirtConfig)             // ?????????????????????
    wrapper.vm.sendOrder(wrapper.vm.tshirt)
    
    const wrapper = mount(orderForm)
    expect(wrapper.text()).toMatch('Order')   // Komponent Order med rubriken 'Order'
  })
})