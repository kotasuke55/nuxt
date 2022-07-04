<template>
  <div>
    <Header></Header>
    <div class="register">
      <div class="inner">
        <h2>新規登録</h2>
        <form>
          <validation-Observer ref="obs" v-solt="ObserverProps">
            <validation-provider v-slot="{ errors }" rules="required|max:20">
              <input type="text" name="ユーザー名" v-model="name" placeholder="ユーザー名">
              <div class="error">{{ errors[0] }}</div>
            </validation-provider>
            <validation-provider v-slot="{ errors }" rules="required|email">
              <input type="email" name="メールアドレス" v-model="email" placeholder="メールアドレス">
              <div class="error">{{ errors[0] }}</div>
            </validation-provider>
            <validation-provider v-slot="{errors}" rules="required|min:6">
              <input type="password" name="パスワード" v-model="password" placeholder="パスワード">
              <div class="error">{{errors[0]}}</div>
            </validation-provider>
            <button @click="register">新規登録</button>
          </validation-Observer>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
     async register() {
      

      if (!this.name || !this.email || !this.password) {
        alert('ユーザー名またはメールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user.sendEmailVerification().then(() => {
            this.$router.replace('/login')
          })
        })  
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
      const sendData = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      await this.$axios.post("http://127.0.0.1:8000/api/person/", sendData);
   }
  }
}
</script>

<style>
.error {
  color:red;
}

.inner {
 text-align: center;
 background-color: #fff;
 width: 30%;
 margin: 100px auto;
 border-radius: 10px;
}

.inner h2{
  padding: 20px 0;
}

input {
  width: 80%;
  padding: 5px 0;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #333;
}

button {
  border-radius: 20px;
  padding: 5px 15px;
  margin-bottom: 20px;
  color: #fff;
  background-color: rgb(119, 0, 255);
}
</style>