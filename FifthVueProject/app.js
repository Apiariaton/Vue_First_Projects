const app = Vue.createApp({
  data(){
      return {
          firstInputBoxTextValue: "",
          secondInputBoxTextValue: ""
      };
  },
  methods: {
      showAlert(){
          alert("Button has been clicked..!");
      },
      updateInputBoxText(event,inputBoxTextIdentifier)
      {
          this[inputBoxTextIdentifier] = event.target.value;
      }
  }
});

app.mount("#assignment");
