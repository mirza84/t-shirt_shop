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
  test('val av färg på t-shirt', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addColor('green')
    expect(wrapper.vm.tshirt.color).toEqual('green')
  })
  test('text på t-shirt', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addText('Sudo')
    expect(wrapper.vm.tshirt.text).toEqual('Sudo')
  })
  test('textstorlek på t-shirt', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addTextSize('14')
    expect(wrapper.vm.tshirt.text.size).toEqual('14')
  })
  test('textfärg på t-shirt', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addTextColor('red')
    expect(wrapper.vm.tshirt.text.color).toEqual('red')
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
  test('ladda upp bild', async () => {
    const wrapper = mount(tShirtConfig)
    var picture = wrapper.vm.tshirt.picture
    await wrapper.vm.addPicture('mypicture')      // lägga till await (async) 
    expect(wrapper.vm.tshirt.picture).not.toMatchObject(picture)
  })
  test('val av material', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.selectMaterial('bomull')
    expect(wrapper.vm.tshirt.material).toEqual('bomull')
  })
  test('visa priset', () => {
    const wrapper = mount(tShirtConfig)
    var stdPrice = wrapper.vm.tshirt.price
    var newPrice = 0
    if (wrapper.vm.tshirt.text > 0) {      // kräver att man kör testet "text på t-shirt" innan!!
      newPrice = stdPrice + 50            // 50kr för texten
    } else (newPrice = stdPrice)

    if (wrapper.vm.tshirt.material = 'bomull') {
      newPrice = newPrice + 50            // 50kr för bomull. Polyester standard pris
    }
    wrapper.vm.showPrice(newPrice)
    expect(wrapper.vm.tshirt.price).toEqual(newPrice)
  })
})
describe('orderForm', () => {
  test('skicka order', () => {
    const wrapper = mount(orderForm)             // orderForm test
    let expectedOrderData = {
      firstName: "Ben",
      lastName: "Bensson",
      address: "Bengatan",
      email: "ben@mail.com",
      tshirt: {
        storlek: "L",
        text: "hero",
        material: "bomull",
        pris: 100 + 50 + 50
      }
    }
    wrapper.vm.setFirstName(expectedOrderData.firstName)
    wrapper.vm.setLastName(expectedOrderData.lastName)
    wrapper.vm.setAddress(expectedOrderData.address)
    wrapper.vm.setMail(expectedOrderData.email)
    wrapper.vm.tshirt.addSize('L')
    wrapper.vm.tshirt.addText('Sudo')
    wrapper.vm.tshirt.selectMaterial('bomull')
    wrapper.vm.tshirt.addSize('L')
    wrapper.vm.tshirt.showPrice('200')

    expect(wrapper.vm.orderData).toEqual(expectedOrderData)  // orderData objekt i orderForm
  })
})
describe('buyForm', () => {
  test('betala order', () => {
    const wrapper = mount(buyForm)             // buyForm test
    let paymentMethod = {card, invoice}

    wrapper.vm.addPaymentMethod('card')
    expect(wrapper.vm.buyForm.paymentMethod).toEqual(paymentMethod.card)  // orderData objekt i orderForm

    wrapper.vm.addPaymentMethod('invoice')
    expect(wrapper.vm.buyForm.paymentMethod).toEqual(paymentMethod.invoice)

    wrapper.vm.addPayment(buyForm)
  })
})