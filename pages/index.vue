<template>
  <div id="home">
    <Sideber></Sideber>
    <div class="home">
      <h2 class="home__ttl">ホーム</h2>
    </div>
  </div>

</template>

<script>
import Sideber from '~/components/Sideber.vue';
export default {
  components: { Sideber }
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

