<template>
  <div class="team">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="team.name">
      </div>
      <div class="form-group">
        <label for="conference">Conference</label>
        <input type="text" class="form-control" id="conference" placeholder="Enter conference" v-model="team.conference">
      </div>
      <div class="form-group">
        <label for="bd">Founded</label>
        <input type="text" class="form-control" id="bd" placeholder="Enter date of found" v-model="team.bd">
      </div>
      <div class="form-group">
        <label for="coach">Coach</label>
        <input type="text" class="form-control" id="coach" placeholder="Enter name of coach" v-model="team.coach">
      </div>
      <div class="form-group">
        <label for="rings">Championships</label>
        <input type="text" class="form-control" id="rings" placeholder="Enter number of championship" v-model="team.rings">
      </div>
      <div class="form-group">
        <label for="logo">Team logo</label>
        <input type="text" class="form-control" id="logo" placeholder="Add logo" v-model="team.logo">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addTeam">Submit</button><br><br>
      <router-link :to="{name: 'home'}">Back to list</router-link>
    </form>
  </div>
</template>


<script>
import TeamService from "./TeamService";
export default {
  data()  {
    return  {
      team: {}
    }
  },

  methods:  {
    addTeam() {
      TeamService.addTeam(this.team.name, this.team.conference, this.team.bd, this.team.coach, this.team.rings, this.team.logo);
      this.$router.push('/')
    }
  }
}

</script>


<style scoped>
.team {
    width: 500px;
    border: 1px solid green;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }
</style>
