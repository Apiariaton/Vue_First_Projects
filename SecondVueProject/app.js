const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Deepen knowledge of Vue.js...',
            courseGoalC: 'Finish course',
            courseGoalD: "<p2> Master Vue and build amazing projects </p2>",
            vueLink: 'https://www.google.com/'  
        }
    },
    methods:
    {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5)
            {
                return this.courseGoalA;
            }
            else 
            {
                return 'Master Vue!';
            }
        }
    }
});

app.mount('#user-goal');