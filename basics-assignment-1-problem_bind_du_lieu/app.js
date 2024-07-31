const { createApp } = Vue;

const App = Vue.createApp({
    data() {
        return {
            name : 'Phạm Ngọc Bảo An',
            age : 19,
        }
    },
    methods: {
        myAge() {
            return this.age + 5
        },
        randomFavoriteNumber() {
            const myfavoriteNumber = Math.random();
            return myfavoriteNumber;
        }
    },
})

App.mount('#assignment');