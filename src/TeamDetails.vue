<template>
  <div class="team">
    <h2>Team Details</h2>
    <form>
      <div>
        <span><img :src="team.logo" height="270px" width="270px"></span><br>
        <strong><span>{{team.name}}</span></strong>
      </div>
      <div>
        <label for="conference">Conference:</label>
        <span>{{team.conference}}</span>
      </div>
      <div>
        <label for="bd">Founded:</label>
        <span>{{team.bd}}</span>
      </div>
      <div>
        <label for="coach">Coach:</label>
        <span>{{team.coach}}</span>
      </div>
      <div>
        <label for="rings">Championships:</label>
        <span>{{team.rings}}</span>
      </div>
    </form>
    <router-link :to="{name: 'home'}">Back to list</router-link>
  </div>
</template>


<script>
import TeamService from "./TeamService";
  export default {
    data()  {
      return  {
        team: {},

      }
    },

    created() {

        TeamService.$on("viewDetails", (selectedTeam)=> {
            this.team = selectedTeam;
        })
    },

    mounted() {
        TeamService.viewDetails(this.$route.params.id);
    },

    watch:  {
        '$route.params.id'(id)  {
            TeamService.viewDetails(id);
        }
    }

  }
</script>


<style scoped>
  .team {
    width: 500px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }
</style>
