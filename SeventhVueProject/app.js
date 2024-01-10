const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    computed: {
        boxCClasses(){
            return {active : this.boxCSelected};
        }
    },
    methods:
    {
        selectThisBox(box)
        {
            const thisBoxSelectedLabel = box + "Selected";
            this[thisBoxSelectedLabel] = true;
            const otherBoxes = Object.keys(this).filter(box => box.includes("box") && box != thisBoxSelectedLabel);
            
            otherBoxes.forEach(otherBox =>{
                this[otherBox] = false;
            });
        }
    }

});

app.mount("#styling");