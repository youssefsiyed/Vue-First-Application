<template>
  <div class="Users">
<h1>Users</h1>
<div class="container-fluid">

  <form v-on:submit="AddUser">
     <div class="form-group">
    <label for="">First name</label>
    <input type="text" class="form-control" v-model="user.firstname" placeholder="Enter the name">
     </div>
      <div class="form-group">
    <label for="">Last name</label>
    <input type="text" class="form-control" v-model="user.lastname" placeholder="Enter the name">
      </div>
       <div class="form-group">
    <label for="">Email</label>
    <input type="email" class="form-control" v-model="user.email" placeholder="Enter the email">
    </div>
  <button type="submit" class="btn btn-primary btn-block">Submit</button>
  </form>
</div>
<br>
<div class="container">
  <h1 class="display-4">List Of Users</h1>
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Company Name</th>
      <th scope="col">Company BS</th>
      <th scope="col">DELETE</th>
      <th scope="col">UPADTE</th>
      
    </tr>
  </thead>
  <tbody  v-for="us in users">
    <tr>
      <!-- <th scope="row"><input type="checkbox" class="toggle"></th> -->
      <td>{{us.id}}</td>
      <td>{{us.username}}</td>
      <td>{{us.name}}</td>
      <td>{{us.email}}</td>
      <td>{{us.address.city}}</td>
      <td>{{us.company.name}}</td>
      <td>{{us.company.bs}}</td>
      <td><button class="btn btn-danger" v-on:click="deleteUser(us)">Delete</button></td>
      <td><button class="btn btn-warning">Update</button></td>    
    </tr>
  </tbody>
  </table>
</div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      user : {},
      users : [
      ]
    }
  },
  methods :{
    AddUser : function(){
      this.users.push(
        {
          name :this.user.firstname,
          username: this.user.lastname,
          email : this.user.email,
          city : '',
          name : '',
          bs : ''
        }
      )
    },
    deleteUser : function(user){
      this.users.splice(this.users.indexOf(user,1))
    }
  },
  created : function(){
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
      this.users=response.data;
    })
  }
}
</script>

<style scoped>
</style>
