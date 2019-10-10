<script>
export default {
  data() {
    return {
      orderData: {
        firstName: "Ben",
        lastName: "Bensson",
        address: "Bengatan",
        email: "ben@mail.com",
        pnr: "",
        payMethod: "",
        tshirt: {
          pris: 100 + 50 + 50
        }
      },
      cardInfo: {
          cardNumber: "",
          validDate: "",
          cvc: ""
      },
      setPnr(pnr) {
        this.orderData.pnr = pnr
      },
      setPayMethod(payMethod) {
          this.orderData.payMethod = payMethod
      },
      setCardNumber(cardNumber) {
        this.cardInfo.cardNumber = cardNumber
      },
      setValidDate(validDate) {
          this.cardInfo.validDate = validDate
      },
      setCvc(cvc){
          this.cardInfo.cvc = cvc
      }
    }
  }
};
</script>
