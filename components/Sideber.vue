<template>
  <div class="sideber">
    <img src="../img/img/logo.png" alt="">
    <div class="home-icon">
      <img src="../img/img/home.png" alt="">
      <NuxtLink to='/' tag="p">ホーム</NuxtLink>
    </div>
    <div class="logout">
      <img src="../img/img/logout.png" alt="">
      <p @click="logout">ログアウト</p>
    </div>
    <p>シェア</p>

    <validation-observer ref="obs" v-slot="ObserverProps">
      <validation-provider v-slot="{ errors }" rules="required|max:120">
        <textarea class="share" v-model="share" name="投稿" type="text"></textarea>
        <div class="error">{{ errors[0] }}</div>
      </validation-provider>
      <button type="button" class="share__btn" @click="addShare">シェアする</button>
    </validation-observer>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      share:''
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('ログアウトが完了しました')
          this.$router.replace('/login')
        })
    },
    addShare() {
    
  }
}
}
</script>

<style>
.sideber{ 
  width: 23%;
}

.sideber img {
  width: 120px;
  padding: 10px;
}

.home-icon {
  display: flex;
  align-items: center;
}

.home-icon img {
  width: 25px;
}

.home-icon p {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
}

.logout {
  display: flex;
  align-items: center;
}

.logout img{
  width: 25px;
}

.logout p {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
}

.sideber p {
  color: #fff;
  font-size: 18px;
  padding: 10px;
}

.share {
  width: 95%;
  height: 20vh;
  margin: 10px;
  border: 1px solid #fff;
  background-color: rgb(50, 47, 58);
  border-radius: 15px;
  color: #fff;
  font-size: 20px;
}

.share__btn {
    border-radius: 20px;
    padding: 5px 15px;
    margin-bottom: 20px;
    color: #fff;
    background-color: rgb(119, 0, 255);
    float: right;
}

.error {
  color: red;
}
</style>