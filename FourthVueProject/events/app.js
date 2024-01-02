const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  methods: {
    incrementCounter(){
      this.counter += 1;
    },
    decrementCounter(){
      this.counter -= 1;
    },
    addNumberToCounter(value){
      this.counter += value;
    },
    setName(event, lastName){
      this.name = event.target.value + lastName;
    }
  }
});

app.mount('#events');
