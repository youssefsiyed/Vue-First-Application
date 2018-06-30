<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- <router-view/> -->
  <Users></Users>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Users from './components/Users'

export default {
  name: 'App',
  components : {
    Navbar,Users
  }
}
</script>

<style>
#app {
  text-align: center;
  /* margin-top: 60%; */
}
</style>
