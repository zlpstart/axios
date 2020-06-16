<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="login()">登录</button>
    <button @click="find()">查询</button>
  </div>
</template>


<script>
// @ is an alias to /src
// http://139.196.234.125:8080

import {login,find} from '../util/api'
export default {
  name: "Home",
  methods: {
    login() {
      this.axios({
        method: "post",
        url: "login",
        data: {
          username: "admin",
          password: 123456
        }
      }).then(res => {
        console.log(res);
      });
    },
    find() {
      this.axios({
        method: "get",
        url: "find",
        params: {
          id:12
        }
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
