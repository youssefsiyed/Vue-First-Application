<template>
  <div class="hello">
    <br>
    <b-container>
      <h1>{{msg}}</h1>
<label for="" class="text-center">My Message :</label>
<input type="text" v-model="users.firstname">
<button class="btn btn-warning btn-block" v-on:click="alert()">Alert!!!</button>
    </b-container>
    <br>
  <b-container fluid v-if="showuser">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>      
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
      <th scope="col">Street</th>
    </tr>
  </thead>
  <tbody  v-for=" user in users">
    <tr>
      <th scope="row">1</th>
      <td>{{user.firstname}}</td>
      <td>{{user.lastname}}</td>
      <td>{{user.age}}</td>
      <td>{{user.address.ville}}</td>
      <td>{{user.address.rue}}</td>
    </tr>
  </tbody>
</table>

</b-container>
<div v-else>User Not Found</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'FIRST TEST',
      users : [
        {
        firstname : 'amine',
        lastname : 'naji',
        address : {
          ville : 'casablanca',
          rue : '2 mars'
        },
        age : 21,
      },
      {
        firstname : 'amine',
        lastname : 'naji',
        address : {
          ville : 'casablanca',
          rue : '2 mars'
        },
        age : 21,
      }
      ],
        showuser : true, 
    }
  },
      methods : { 
       alert : function (){
         alert('test');
       }
    }
}
</script>

<style scoped>
</style>
