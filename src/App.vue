<template>
  <div>
    <myHeader>
      <h1>NBA SPA</h1>
    </myHeader>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>

  import myHeader from './Header'


export default {
  name: 'app',
  components: {
    myHeader,
  },
  data () {
    return {

      selectedTeam: {},
      mode: 'view',


    }
  },

  computed: {
    componentName() {
      return this.mode == 'view' ? 'TeamDetails' : 'TeamAdd';
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


  .container  {
    display: flex;
    align-items: flex-start;
  }

  .im   {

    margin-left: 200px;
  }
</style>
