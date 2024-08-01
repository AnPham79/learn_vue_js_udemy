const { createApp } = Vue

const App = createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = !this.boxASelected
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected
      } else if (box === 'C') {
        this.boxCSelected = !this.boxCSelected
      }
    },
  },
})

App.mount('#styling')
