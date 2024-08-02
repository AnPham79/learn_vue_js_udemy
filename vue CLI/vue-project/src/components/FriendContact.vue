<template>
    <div>
        <h2>{{ name }}</h2>
        <button @click="toggleDetail">{{ detailAreVisible ? 'Hide' : 'Show' }} details</button>
        <ul v-if="detailAreVisible">
            <li><strong>Phone : {{ phone }}</strong></li>
            <li><strong>Email : {{ email }}</strong></li>
        </ul>
    </div>
</template>
<script>
export default {
    props : [
        'name',
        'phone',
        'email'
    ],
    data() {
        return {
            detailAreVisible : false,
            friend : {
                id: 1,
                name: 'Phạm Ngọc Bảo An',
                phone: '0927553664',
                email: 'anpnb79@gmail.com'
            },
        }
    },
    methods : {
        toggleDetail() {
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
}
</script>