const app = Vue.createApp(
{
    data(){
        return {
            firstParagraphClasses: "",
            isFirstParagraphVisible: true,
            secondParagraphBackgroundColor: ""
        };
    },
    methods: {
        toggleElementIsVisible(element)
        {
            if ((this["is" + element + "Visible"]) == "visible")
            {
                this["is" + element + "Visible"] =  "hidden";
                return;
            }

            this["is" + element + "Visible"] =  "visible";
        },
    }
}
);

app.mount("#assignment");
