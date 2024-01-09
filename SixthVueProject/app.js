const app = Vue.createApp({
    data(){
        return {
            result : 0,
        };
    },
    computed: {
        warningMessage()
        {
            if (this.result < 37)
            {
                return "Not there yet!";
            }
            else if (37 < this.result)
            {
                return "Too much!";
            }
            else
            {
                return " --- ";
            }
        }

    },
    watch: {
        result(value)
        {
            const that = this;
            const timer = setTimeout
            (
            ()=>{
            that.result = 0}, 
            5000
            );
        }
    },
    methods: {
        addIntegerToResult(integer_value)
        {
            this.result += integer_value;
        }
    }
});

app.mount("#assignment");