<template>
  <div class="container">
    <div class="block" :class="{ animate : animateBlock }"></div>
    <button @click="animationBlock" >Animate</button>
  </div>
  <div class="container">
    <!-- ta có thể tự đặt tên cho các class có sẵn của vue
    <transition name="para" enter-active-class="sadasdasd">
        <p v-if="paraIsVisible">This is sometimes visible ...</p>
    </transition> -->
    <transition name="para">
        <p v-if="paraIsVisible">This is sometimes visible ...</p>
    </transition>
     <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { dialogIsVisible: false, animateBlock: false, paraIsVisible : false };
  },
  methods: {
    animationBlock() {
        this.animateBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active {
  transition: all 0.3s ease-in-out;
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-active {
  transition: all 0.3s ease-in-out;
}

.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.animate {
  animation: identifier 0.3s ease-out infinite;
}

@keyframes identifier {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1.5);
  }
}


</style>