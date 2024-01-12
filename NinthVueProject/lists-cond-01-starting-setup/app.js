const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      goalInputText: ""
    };
  },
  methods: {
    addGoalToGoals()
    {
      this.goals.push(this.goalInputText);
      this.goalInputText = "";
    }
  }
});

app.mount('#user-goals');
