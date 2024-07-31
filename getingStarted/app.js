// const buttonEL = document.querySelector('button');
// const inputEL = document.querySelector('input');
// const listEL = document.querySelector('ul');

// function global()
// {
//     const enteredValue = inputEL.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = enteredValue;
//     listEL.appendChild(listItem)
//     inputEL.value = '';
// }

// buttonEL.addEventListener('click', global);

const { createApp } = Vue;

createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
