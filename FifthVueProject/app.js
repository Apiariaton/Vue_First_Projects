const app = Vue.createApp({
    data(){
        return {
            userInput: "",
            confirmedInput:"",
        };
    },
    methods: {
        showAlert(){
            alert("Button has been clicked..!");
        },
        saveInput(event)
        {
            this.userInput = event.target.value;
        },
        confirmInput(event)
        {
            this.confirmedInput = event.target.value;
        }
    }
});

app.mount("#assignment");