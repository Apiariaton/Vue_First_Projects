const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedInput: "",
      lastName: "H"
    };
  },
  computed: {
    fullName() {
      if (this.name == '')
      {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {
    counter(value)
    {
      if (value < -50 || value > 50 )
      {
        this.counter = 0;
      }
    }
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
      this.name = event.target.value;
    },
    submitForm(){
      alert('Submitted');
    },
    confirmInput(){
      this.confirmedInput = this.name;
    },
    resetInput()
    {
      this.name = "";
      this.confirmedInput = name;
    },
    outputFullName(){
     
    }
  }
});

app.mount('#events');
