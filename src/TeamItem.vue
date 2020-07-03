<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{index}}  {{team.name}}</h3>
      <h4 class="card-title">{{team.conference}}</h4>
      <a href="#" class="btn btn-primary" @click="viewDetailsClicked">View Details</a>
    </div>
  </div>
</template>


<script>
    import TeamService from "./TeamService";

  export default {
    props:  {
      team:  {
        type: Object,
        required: true
      },
      index:  {
        type: [Number, String]
      }
    },
    data()  {
      return  {

      }
    },

    methods:  {
      viewDetailsClicked()  {
          //this.$emit("viewDetails", this.team.id); // для того чтобы вернуть данные из компонента TeamItem в TeamList
          //this.viewDetails(this.team.id);
          //TeamService.viewDetails(this.team.id);
          //this.$router.push('/detail/'+ this.team.id)
          this.$router.push({name: 'team-details', params: {id: this.team.id}})

      }
    }
  }
</script>


<style>
  div.card  {
    width: 500px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }
</style>
