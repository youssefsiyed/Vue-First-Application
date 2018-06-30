<template>
  <div class="Navbar">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
  <a class="navbar-brand" href="#">Vue App</a>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link">User</a>
    </li>
  </ul>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link">Login</a>
    </li>
  </ul>
</nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
