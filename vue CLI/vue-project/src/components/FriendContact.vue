<template>
  <div>
    <h2>{{ name }} - {{ isFavorite ? 'Favorite' : 'N/A' }}</h2>
    <button @click="toggleDetail">{{ detailAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">{{ isFavorite ? 'Unfavorite' : 'Favorite' }}</button>
    <button @click="toggleDelete">Delete</button>
    <ul v-if="detailAreVisible">
      <li><strong>Phone: {{ phone }}</strong></li>
      <li><strong>Email: {{ email }}</strong></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['toggle-favorite', 'un-friend'],
  data() {
    return {
      detailAreVisible: false
    };
  },
  methods: {
    toggleDetail() {
      this.detailAreVisible = !this.detailAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite');
    },
    toggleDelete() {
      this.$emit('un-friend');
    }
  }
};
</script>
