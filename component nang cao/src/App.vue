<template>
  <div>
    <TheHeader></TheHeader>
    <BadgeList></BadgeList>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo>
  </div>
</template>

<script>
import BadgeList from './components/BadgeList.vue';
import  TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components : {
    TheHeader,
    BadgeList,
    UserInfo
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>