<template>
  <div>
    <h2>{{ name }} - {{ isFavorite === true ? 'favorite' : 'na' }}</h2>
    <button @click="toggleDetail">{{ detailAreVisible ? 'Hide' : 'Show' }} details</button>
    <button @click="toggleFavorite">{{ isFavorite === true ? 'unfavorite' : 'favorite' }}</button>
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
        required : true
    },
    phone: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    isFavorite: {
        type : Boolean,
        required : false,
        default : false,
        // boolean thì k cần validate vì nó chỉ trả về đúng hoặc sai
        // validator: function(value) {
        //     return value === '1' || value === '0'
        // } 
    }
  },
  emits : ['toggle-favorite'],
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
    }
  }
};
</script>
