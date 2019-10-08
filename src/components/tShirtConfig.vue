<script>
export default {
  data() {
    return {
      tshirt: {
        size: "XL",
        color: "",
        text: "a",
        textSize: "",
        textColor: "",
        fontStyle: "",
        fontType: "",
        count: 0,
        picture: 0,
        material: "bomull",
        price: 100 // 100 kr för standart t-shirt (polyester)
      },
      addSize(size) {
        this.tshirt.size = size;
      },
      addColor(color) {
        this.tshirt.color = color;
      },
      addText(text) {
        this.tshirt.text = text;
      },
      addTextSize(textSize) {
        this.tshirt.textSize = textSize;
      },
      addTextColor(textColor) {
        this.tshirt.textColor = textColor;
      },
      addFontStyle(fontStyle) {
        this.tshirt.fontStyle = fontStyle;
      },
      addFontType(fontType) {
        this.tshirt.fontType = fontType;
      },
      addItem(count) {
        this.tshirt.count = count;
      },
      addPicture(picture) {
        var picture = document.getElementById("../assets/logo.png")//.files[0];
        //var picture = document.getElementById("input")
        // const numFiles = files.length;
        // for (let i = 0, numFiles = files.length; i < numFiles; i++) {
        //   const file = files[i];
        // }
        //var blob = picture.stream()
        if (picture) {
          this.tshirt.picture = picture;
        }
      },
      selectMaterial(material) {
        this.tshirt.material = material;
      },
      setPrice(price) {
        this.tshirt.price = price;
      }
    };
  }
};
</script>