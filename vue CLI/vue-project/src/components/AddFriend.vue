<template>
    <div>
        <form action="" @submit.prevent="submitData">
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="name">
            </div>
            <div>
                <label for="phone">Phone</label>
                <input type="text" v-model="phone">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" v-model="email">
            </div> 
            <div>
                <button type="submit">Add Friend Now</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    emits : ['add-friend'],
    data() {
        return {
            name : '',
            phone : '',
            email : ''
        }
    },
    methods : {
        submitData() {
            this.$emit('add-friend', this.name, this.phone, this.email)
            this.name = ''
            this.phone = ''
            this.email = ''
        }
    }
}
</script>
