const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


const data = {
  message: 'Hello',
  longMessage: 'Hello',
  speaker: 'Percival Mook'
};

const handler = {
  set(target,key,value){
    console.log("Target:",target);
    console.log("Key:",key);
    console.log("Value:",value);
    if (key === 'message')
    {
      target.longMessage = value + ' World!';
    }
    target.message = value;
    console.log(target.longMessage);
    console.log(target.message);
  }

};

const proxy = new Proxy(data,handler);
proxy.message = "Hello...";
proxy.speaker = "Gerald Marks";

let message = 'Hello!!';

let longMessage = message + " world";

// console.log(longMessage);