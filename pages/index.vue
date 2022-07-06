<template>
  <div id="home">
    <Sideber></Sideber>
    <div class="home">
      <h2 class="home__ttl">ホーム</h2>
      <table>
        <tr v-for="item in postlist" :key="item.id">
          <th>{{item.content}}</th>
          <th></th>
        </tr>
        <tr></tr>
      </table>
    </div>
  </div>

</template>

<script>
import Sideber from '~/components/Sideber.vue';
export default {
  data() {
    return {
      postlist:[]
    }
  },
  components: { Sideber },
  methods: {
    async getPosts() {
      const resData = await this.$axios.get('http://127.0.0.1:8000/api/post/');
      this.postlist = resData.data.data;
    },
  },
  created() {
    this.getPosts();
  }
}
</script>

<style>
#home{
  display: flex;
  justify-content: space-between;
}

.home {
  width: 75%;
}

.home__ttl {
  color: #fff;
  font-size: 20px;
  padding: 12px;
  border: 1px solid #fff;
}
</style>

