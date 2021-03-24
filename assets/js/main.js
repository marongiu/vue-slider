var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    arrayImg: [
      'http://1.bp.blogspot.com/-6PYPT11obnA/Tlc9KFGj1HI/AAAAAAAAFUc/5I_IeithKZ8/s400/Latest-Nature.jpg', //0
      'http://wallpapers.net/californian-nature/download/400x400.jpg', // 1
      'https://chile.travel/wp-content/uploads/bfi_thumb/parque-Torres-del-Paine-mq6z5gsqkpg9w9fxr86yz617ye4k6q48e5dvqtpz8g.png' // 2
    ],
  },
  methods: {
    nextImg: function () {
      // devo prendere indice e spostarlo a seconda delle immagini
        // imposto -1 altrimenti index andrebbe a 3
      if (this.index < this.arrayImg.length -1) {
        this.index++
      } else {
        this.index = 0;
      }
    },
    prevImg: function () {
      // devo prendere indice e spostarlo a seconda delle immagini
      if (this.index > 0) {
        this.index--
      } else {
        this.index = this.arrayImg.length - 1;
      }
    },
    select: function (circleIndex) {
      this.index = circleIndex;
    }
  }
});


// metodo Base: con 3 immagini
// nextImg: function () {
//   // devo prendere indice e spostarlo a seconda delle immagini
//   this.index++
//   if (this.index == 3) {
//     this.index = 0;
//   }
// },
// prevImg: function () {
//   // devo prendere indice e spostarlo a seconda delle immagini
//   this.index--
//   if (this.index == -1) {
//     this.index = 2;
//   }
// }
