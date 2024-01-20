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
      this.message = this.$refs.userText.value;
    }
  },
  beforeCreate()
  {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount(){
    console.log("beforeMount()");
  },
  mounted(){
    console.log("mounted");
  },
  beforeUpdate(){
    console.log("beforeUpdate");
  },
  updated()
  {
    console.log("updated()");
  },
  beforeUnmount()
  {
    console.log('beforeUnmount');
  },
  unmounted()
  {
    console.log('unmounted()');
  }
});

app.mount('#app');
app.unmount("#app");


const secondApp = Vue.createApp({
  template: `<p>{{favouriteMeal}} </p>`,
  data(){
    return {
    favouriteMeal: "Pizza",
    }
  },
  methods: {


  }
});

secondApp.mount("#secondApp");


// const data = {
//   message: 'Hello',
//   longMessage: 'Hello',
//   speaker: 'Percival Mook'
// };

// const handler = {
//   set(target,key,value){
//     console.log("Target:",target);
//     console.log("Key:",key);
//     console.log("Value:",value);
//     if (key === 'message')
//     {
//       target.longMessage = value + ' World!';
//     }
//     target.message = value;
//     console.log(target.longMessage);
//     console.log(target.message);
//   }

// };

// const proxy = new Proxy(data,handler);
// proxy.message = "Hello...";
// proxy.speaker = "Gerald Marks";

// let message = 'Hello!!';

// let longMessage = message + " world";

// console.log(longMessage);