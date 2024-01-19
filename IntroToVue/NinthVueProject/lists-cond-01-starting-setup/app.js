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
    },
    removeGoalFromGoals(index)
    {
      this.goals.splice(index,1);
    }
  }
});

app.mount('#user-goals');
