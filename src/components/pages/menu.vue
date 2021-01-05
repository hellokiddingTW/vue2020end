<template>
  <div class="my-3">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="mr-3 nav-link" to="/page/">卡片一</router-link>
      </li>
      <li class="nav-item">
        <router-link class="mr-3 nav-link" to="/page/child2"
          >卡片二</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="mr-3 nav-link" to="/page/child3"
          >卡片三</router-link
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="updatePath" href="#"
          >跳轉到指定頁面</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="beforePath" href="#"
          >回前一頁</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    updatePath() {
      const path = `/page/child2`;
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    beforePath() {
        this.$router.back();
      
    },
  },
};
</script>
