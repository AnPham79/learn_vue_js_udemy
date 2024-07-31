const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      courseGoal: 'Finish Him Daddy',
      courseLmao: 'Đont do this Daddy',
      vueLink : 'https://vuejs.org/guide/quick-start.html'
    };
  }, methods: {
    randomNumber() {
        const numberRandom = Math.random();
        if(numberRandom < 0.5 )
        {
            return this.courseGoal
        } else {
            return this.courseLmao
        }
    }
  }
});

app.mount('#user-goal');