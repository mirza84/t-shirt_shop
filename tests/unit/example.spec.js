import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import tShirtConfig from '@/components/tShirtConfig.vue'
import orderForm from '@/components/orderForm.vue'
//import buyForm from '@/components/buyForm.vue'

describe('App', () => {
  test('does page load', () => {
    const wrapper = mount(App)
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  test('renders template', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toMatch('Home')    // testa att finna 'Home' på hemsida (finns i App.vue)
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
    expect(wrapper.vm.tshirt.textSize).toEqual('14')
  })
  test('textfärg på t-shirt', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addTextColor('red')
    expect(wrapper.vm.tshirt.textColor).toEqual('red')
  })
  test('teckenstil', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addFontStyle('I')
    expect(wrapper.vm.tshirt.fontStyle).toEqual('I')
  })
  test('teckentyp', () => {
    const wrapper = mount(tShirtConfig)
    wrapper.vm.addFontType('Calibri')
    expect(wrapper.vm.tshirt.fontType).toEqual('Calibri')
  })
  test('antal varor', () => {
    const wrapper = mount(tShirtConfig)
    var oldCount = wrapper.vm.tshirt.count
    wrapper.vm.addItem(1)
    expect(wrapper.vm.tshirt.count).toEqual(oldCount + 1)
  })
  test('ladda upp bild', async () => {
    const wrapper = mount(tShirtConfig)
    var picture = wrapper.vm.tshirt.picture
    await wrapper.vm.addPicture()      // lägga till await (async) 
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

    if (wrapper.vm.tshirt.text != '') {      // om det finns någon text
      newPrice = stdPrice + 50            // 50kr för texten
    } else (newPrice = stdPrice)

    if (wrapper.vm.tshirt.material === 'bomull') {
      newPrice = newPrice + 50            // 50kr för bomull. Polyester standard pris
    }
    console.log('material ' + wrapper.vm.tshirt.material)
    console.log('texten på tshirt är ' + wrapper.vm.tshirt.text)
    console.log('the OLD tshirt price is ' + wrapper.vm.tshirt.price)
    wrapper.vm.setPrice(newPrice)
    console.log('the NEW tshirt price is ' + wrapper.vm.tshirt.price)
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
        text: "Hero",
        material: "bomull",
        pris: 100 + 50 + 50         //förväntad pris
      }
    }
    wrapper.vm.setFirstName(expectedOrderData.firstName)
    wrapper.vm.setLastName(expectedOrderData.lastName)
    wrapper.vm.setAddress(expectedOrderData.address)
    wrapper.vm.setMail(expectedOrderData.email)

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