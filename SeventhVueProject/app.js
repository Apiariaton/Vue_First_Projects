const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    methods:
    {
        selectThisBox(box)
        {
            const thisBoxLabel = box + "Selected";
            this[thisBoxLabel] = true;
            const otherBoxes = Object.keys(this).filter(box => box.includes("box") && box != thisBoxLabel);
            
            otherBoxes.forEach(otherBox =>{
                this[otherBox] = false;
            });
        }
    }

});

app.mount("#styling");