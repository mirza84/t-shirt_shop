<script>
export default {
  data() {
    return {
      orderData: {
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        tshirt: {
          storlek: "L",  
          text: "Hero",
          material: "bomull",
          pris: 100 + 50 + 50
        }
      },
      setTShirt(tShirt) {
        this.orderData.tShirt = tShirt;
      },
      setFirstName(firstName) {                         // orderData
        this.orderData.firstName = firstName;
      },
      setLastName(lastName) {
        this.orderData.lastName = lastName;
      },
      setAddress(address) {
        this.orderData.address = address;
      },
      setMail(mail) {
        this.orderData.email = mail;
      }
    }
  }
};
</script>
