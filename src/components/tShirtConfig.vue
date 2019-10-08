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
        picture: "",
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
        var picture = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7+ooooAKKKqa5qmn6PpsuoapeQ2ltCMvLK21R/ifaplKMYuUnZIqEJTkoxV2y3QSAMngV4R8Qv2gdsj2nhCwVwDj7beKcH3SP+rH8K8j8UeM/FPiKRjrGu3lwjf8ALLzCsQ+iLhR+VfG5jxxl2Gk4UE6j8tF9/wDkmj7fLOAczxUVOu1Si++svuX6tM+vdS8U+GdPcpfeIdLtmHVZbyNT+RNUI/iH4GeTYPFmkZ97tQPzJxXxpRXz0/ELEt+7Qil6t/5H0sPDXCpe/iJN+SS/z/M+4tK1vRtT/wCQbq1jef8AXvcpJ/6CTV6vhBGZHDKxVlOQQcEV13hH4n+NvD0iC01ue4gX/l3vD50ZHoN3Kj/dIrvwniFSk0sTRa84u/4O35nn4zw2rRi5YWupPtJW/FX/ACPsGivJvht8dNC1qSOx8QxDR7xuBKW3W7n/AHuqfjx716xG6yRq6MGVhlWByCPUV9xgMywmPp+0w01JfivVbo+BzDK8Zl1X2WKpuL/B+j2fyFoooruPPCiiigAooqh4n1ex0HQLrWNSlEVtaRmSQ9z6AepJwAPU1M5xhFzk7JasuEJVJKEFdvRLzM34leMtI8FeH21LU5Czvlbe2Q/PO/oPQep7fkD8p/EfxtrnjTVzd6rcEQoT9ntIyRFAPYdz6k8n9KZ8S/Fuo+M/FE2r37FUJ220AOVgj7KP5k9zXP1+K8S8TVczqulSdqK2X83m/wBF09T904W4Vo5VSVask673f8vkv1fX0Ciiivkz7EKKKKACiiigAr0f4LfFfVPB9zHp2ovLe6IxwYicvbf7UZPb/Z6emDXnFFdeBx+IwNdV8PK0l+Pk+6OLH5fhsfQdDEw5ov8ADzT6M+5tF1Gx1bS4NR065juLW5QPFKhyGH+e3arVfLn7OXxEk8Ka+uj6nOf7Gv5AGLHi2kPAcegPAb8+3P1GCCMjkGv3LIc6pZthfax0ktJLs/8AJ9P+AfgXEORVcnxboy1g9Yvuv811+/qFFFFe2eCFfPf7X3i5rnV7fwhaS4htALi92n70hHyKfopz/wACHpXv9/cRWljNdTNtigjaR29FAyT+Qr4j8U6rPrniS+1e5JMt7cPMw/u5OQPoBgfhXw3HeZSw+BjhoPWo9f8ACt/vdvlc+/8AD7K44nHyxU1pSWn+J7fcr/OxQooor8gP2kKKK9e/Zt+H3hvxlompXWuQTyyWtyscflzFBgrnnFd+WZdWzHErDUWuZ332018zzs1zOhlmFliq6fKrbavV28jyazt57u7jtbWGSaeZwkccalmdj0AA6mvqv4ffC3wxYeC9Otdb8PafdaikAN1LJCGYueSM98Zx+Fbvg/wH4S8Ly+douiwW8+MeexMkvvh2JI/Cujr9U4d4Shl/NUxXLOb0ta6S+a3+SPyLibjKeZclLCKVOEXe97Nv5PRL1Z8mftJaTpui/FGex0myhs7ZbaJhFCm1QSvJxXBV6V+1f/yWG4/69If/AEGvNa/Ms9hGGaYiMVZKT/M/VuH5ynlOGlN3bhHV+gUUUV5J7AV9T/sw+Lm8SeAhYXcpe+0crBIScl48fu2P4Ar/AMB96+WK9F/Zd11tH+K1rbM5EGqxtayDPG4jch+u5QP+BGvpeE8ylgs0gm/dn7r+ez+Tt8rnyvGOVxx2U1Gl79P3l8t181f52Pquiiiv3M/ATkvjvetp/wAIdeuFO0taGHP/AF0Ij/8AZq+PK+sf2n93/ClNX29N0Gfp56f/AFq+Tq/IvECbeY04dFBfi3/kfs/hxTSyyrPq5tfdGP8AmFFFFfCH6CFbvhLxn4m8MW00Gg6tLZRzuHkVEQ7iBjPzA1hUVrRr1aM+elJxl3Ts/vRlWoUq8HTrQUo9mk19zO0HxZ+ImR/xU9x/36j/APia+uoSTChPJKivhJfvCvu2D/UJ/uiv0/gLGYnEfWPb1JSty2u27fF3PyfxEwWFw31b2FOML89+VJXty72Plv8Aav8A+Sw3H/XpD/6DXmtelftX/wDJYbj/AK9If/Qa81r4PiD/AJG2I/xy/M/Q+HP+RPhv8EfyCiiivHPaCr3he9bTfEun6ihIa0u4pgfTa4P9Ko0Drx1q6c3CalHdMipBTg4S2asfeC9BRUVlu+xw7vveWufriiv6UTurn8ttWdjmPjrYtqHwi163UZK2ZmA/65kSf+y18d192XsEV1Zy20yhopkaN1PdSMEfka+I/FmlT6F4mv8AR7gHzLK4eEkj7wB4b6EYP41+X+IWFkqtHErZpxfy1X5v7j9Y8NsYnSr4VvVNSXzVn+S+8z6KKK/OD9PCiiigBV+8K+7YP9Qn+6K+El+8K+7YP9Qn+6K/S/DrfE/9uf8Atx+WeJm2F/7f/wDbD5b/AGr/APksNx/16Q/+g15rXpX7V/8AyWG4/wCvSH/0GvNa+M4g/wCRtiP8cvzPueHP+RPhv8EfyCiiivHPaCr/AIVsW1PxPp2nICWu7uKED/ecD+tUK9H/AGW9CbV/ipb3bITBpUbXLntuxtQfXc2f+Amu7LMLLF42lQX2pJfK+v4HBmuMjg8DWxEn8MW/nbT72fVI4AHpRRRX9FH8zBXz9+194ReHUrfxhZxExXAFvfYH3XA+Rz9QNv8AwEetfQNUvEelWWuaHdaTqMIltbuMxyKfQ9x6EHBB7EV5Od5XHM8DPDvR7p9mtv8AJ+TPZyHNp5Vj4YlaraS7xe/+a80j4coro/ih4P1HwX4pl0q9UvCSXtbjGFnjzwR79iOx/Cucr8DxFCrh6sqNVWlF2aP6Jw2IpYmjGtRleMldMKKKKxNhR1FfWsPxg+HIiQHxIgIUA/6LN/8AEV8k0V7uS8QYnKPaewjF89r3v0v2a7nz+e8OYXOvZ/WJSXJe3Lbrbe6fY7j9obXtJ8R/EqfU9FuxdWj28SCQIy5IXkYYA1w9FFeXjMVPF4ieImknJtu22p62BwkMHhqeGptuMEkr76dwooormOoK+qv2ZfCDeGfAK3l3EUv9XIuJQRgpHj92h/Ak/ViO1eTfs3fDqTxPria7qsBGj2EmVVxxdSjoo9VHU/l3OPp8cDHpX6dwNkko3zGst9IfrL9F8z8p4/z6M7ZbQd7O8/XpH9X8vMKKKK/Sj8tCiiigDB+IvhHSPGfh59L1WI8fNBOg/eQP/eU/zHQ18qfEzwJrvgnVTb6lAZLaRiLe8jB8qYfXs3qp5+o5r7Jqtq+n2OqafJY6jaQ3VtMMSRSoGVh9DXzOf8M4fNo86fLVW0u/k+/5r8D6rhzirE5PLka5qT3j2812f4P8T4Yor3/4hfs/QTSSXfhC/FuTz9iuySn0WTkj6EH615F4o8B+L/Dzt/amgXkca9Zo4/Mi/wC+1yP1r8nzHh7MsBJ+2pNx7rVfetvnY/Ycs4kyvMYr2NVKX8r0l9z3+V0c7RQetFeKe6FFOhjkmlWOKN5HbgKq5J/AV2fhH4UeOPEDqYdGlsoG6z337lQPXB+Y/gDXThsHicVLkoU3J+SbOXFY7C4SHPiKiivNpHFV6Z8FPhJqXi2eLVNXSWy0UHduI2yXXsg7L/tflnt6j8Nvgf4e0CSO91txrN6mGCyJtt4z7J/F9W49hXqSKFUKoAA4AHQV+hZFwPJSVbMf/AF/7c/0X39D824g4+i4uhlnXeb/APbV+r+7qQaTYWemabDp+n28dvbW6BIokGFUCrFFFfpkYqKUYqyR+Vyk5Nyk7thRRRTEFFFFABRRRQAUUUUAZ2paBoWoMWv9F0+6Y9TPao5P5iqKeB/BiPvXwpooP/XhF/8AE0UVhPC4eb5pQTfojohi8RBcsKjS8mzV07TNOsF22Gn2tqp7QQqg/QVaoorWMYxVoqyMZSlJ3k7sKKKKokKKKKACiiigD//Z"
        
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