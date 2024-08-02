<template>
  <section>
    <h2>My list of friends</h2>
    <add-friend @add-friend="addFriend"></add-friend>
    <ul>
      <friend-contact 
        v-for="friend in friends" 
            :key="friend.id" 
            :name="friend.name" 
            :phone="friend.phone" 
            :email="friend.email" 
            :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavorite(friend.id)">
      </friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';

export default {
  components: {
    FriendContact
  },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Phạm Ngọc Bảo An',
          phone: '0927553664',
          email: 'anpnb79@gmail.com',
          isFavorite: true
        },
        {
          id: 2,
          name: 'Phạm Ngọc Thái',
          phone: '0973109607',
          email: 'thaipham29@gmail.com',
          isFavorite: false
        }
      ]
    };
  },
  methods: {
    toggleFavorite(id) {
      const friend = this.friends.find(friend => friend.id === id);
      if (friend) {
        friend.isFavorite = friend.isFavorite === true ? false : true;
      }
    },
    addFriend(name, phone, email) {
        const newFriend = {
            id : new Date().toISOString,
            name : name,
            phone : phone,
            email : email,
            isFavorite : false
        }
        this.friends.push(newFriend)
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
