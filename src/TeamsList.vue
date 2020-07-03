//Контейнер для команд; рендерит то количество команд, которое у него в списке
<template>
  <div>

    <div class="upper-list">
      <div class="add-btn">
        <router-link to="/add" class="btn btn-success">Add team</router-link>
      </div>
      <div class="selector">
        <select v-model="filter">
      <option value="All">All Teams</option>
      <option value="Western">Western</option>
      <option value="Eastern">Eastern</option>
    </select>
      </div>


    </div>

    <TeamItem v-for="(team, i) in filteredTeams" :key="team.id"
              :team="team" :index="(i + 1)"></TeamItem>
  </div>
</template>


<script>
  import TeamItem from './TeamItem'
  import TeamService from "./TeamService";

export default {
  data()  {
    return  {
      teams:  [],
      filter: 'All'
    }
  },
  components: {
    TeamItem
  },


  created()  {

    this.teams = TeamService.teams
  },

  computed: {

    filteredTeams() {

      if (this.filter === 'All') {
        return this.teams
      }

      if (this.filter === 'Western') {
        return this.teams.filter(t => t.conference === 'Western')
      }

      if (this.filter === 'Eastern') {
        return this.teams.filter(t => t.conference === 'Eastern')
      }
    }
  }

}
</script>


<style scoped>

  .upper-list  {

    display: flex;
    align-items: flex-start;
  }

  .add-btn  {

  }

  .selector {
    margin-left: 20px;
  }

</style>
