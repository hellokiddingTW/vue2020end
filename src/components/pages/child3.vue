<template>
  <div>
    <img :src="user.picture.large" class="card-img-top" alt=""  v-if="user.phone"/>
    <div class="card-body">
      <h5 class="card-title" v-if="user.phone">{{user.name.first +  user.name.last}}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        user:{
           
        }
    };
  },
  created() {
    const id = this.$route.params.id;
    this.$http.get(`https://randomuser.me/api/`).then((response) => {
      this.user = response.data.results[0];

      console.log(this.user)
      console.log(this.user.picture.large)
      
    });
  },
};
</script>
