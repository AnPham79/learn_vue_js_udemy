const App = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 1,
                    name: 'Phạm Ngọc Bảo An',
                    phone: '0927553664',
                    email: 'anpnb79@gmail.com'
                },
                {
                    id: 2,
                    name: 'Phạm Ngọc Thái',
                    email: 'thaipham29@gmail.com',
                    phone: '0973109607'
                }
            ]
        };
    }
});

App.component('friend-contact', {
    props: ['friend'],
    data() {
        return { 
            detailAreVisible: false
        };
    },
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetail">{{ detailAreVisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    methods: {
        toggleDetail() {
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
});

App.mount('#app');
