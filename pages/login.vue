<template>
  <div>
    <Header></Header>
    <div class="login">
      <div class="inner">
        <h2>ログイン</h2>
        <validation-Observer ref="obs" v-slot="ObserverProps">
          <validation-provider v-slot="{ errors }" rules="required|email">
            <input type="email" name="メールアドレス" v-model="email" placeholder="メールアドレス">
            <div class="error">{{ errors[0] }}</div>
          </validation-provider>
          <validation-provider v-slot="{errors}" rules="required|min:6">
            <input type="password" name="パスワード" v-model="password" placeholder="パスワード">
            <div class="error">{{errors[0]}}</div>
          </validation-provider>
          <button @click="login" :disabled="ObserverProps.invalid || !ObserverProps.validated">ログイン</button>
        </validation-Observer>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: '',
      password:''
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('ログインが完了しました')
          this.$router.push('/')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    }
  }
}
</script>

