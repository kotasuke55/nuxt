<template>
 <div class="header">
  <div class="header__logo">
    <img src="../img/img/logo.png" alt="">
  </div>
  <div class="header__list">
      <NuxtLink to="/register" class="a">新規登録</NuxtLink>
      <NuxtLink to="/login" class="a">ログイン</NuxtLink>
  </div>
 </div>
</template>

<style>
body {
  background: rgb(50, 47, 58);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  align-items: center;
}

.header__logo img{
  width: 120px;
}

.header__list {
  display: flex;
}

.a {
  color: #fff;
  padding: 0 20px;
  text-decoration: none;
}
</style>