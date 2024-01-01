const app = Vue.createApp({
    data(){
        return {
            name: "W",
            ageCurrent:"24",
            agePlusFive:"29",
            imageURL: "https://images.unsplash.com/photo-1703446592359-fefe8472cc79?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            inputValue: "Pikachu" 
        }
    },
    methods: {
        outputRandomNumberBetween0And1()
        {
            return Math.random();
        },
    }
});

app.mount("#assignment");