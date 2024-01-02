const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter(){
      this.counter += 1;
    },
    decrementCounter(){
      this.counter -= 1;
    }
  }
});

app.mount('#events');
