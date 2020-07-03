import Vue from 'vue'
import _ from "lodash"


export default new Vue({
  data() {
    return  {
      teams:  [
        {id: 1, name: 'Atlanta Hawks', conference: 'Eastern', bd: '1946', coach: 'Lloyd Daniel Pierce', rings: 1, logo: '/public/img/hawks.png'},
        {id: 2, name: 'Boston Celtics', conference: 'Eastern', bd: '1946', coach: 'Brad Stevens', rings: 17, logo:'/public/img/celtics.png'},
        {id: 3, name: 'Chicago Bulls', conference: 'Eastern', bd: '1966', coach: 'Jim Boylen', rings: 6, logo:'/public/img/bulls.png'},
        {id: 4, name: 'Dallas Mavericks', conference: 'Western', bd: '1980', coach: 'Ric Carlisle', rings: 1, logo:'/public/img/mavericks.png'},
        {id: 5, name: 'Memphis Grizzlies', conference: 'Western', bd: '1995', coach: 'Taylor Jenkins', rings: 0, logo: '/public/img/grizzlies.png'},
        {id: 6, name: 'Golden State Warriors', conference: 'Western', bd: '1946', coach: 'Steve Kerr', rings: 5, logo:'/public/img/warriors.png'},
      ]
    }
  },

  methods:  {
    //обработчик события viewDetails, которое объявлено в дочернем компоненте TeamItem
    viewDetails(id) {
      let teamToView = _.find(this.teams, {id: parseInt(id)});
      this.$emit("viewDetails", teamToView); //передаем данные выше из листа в App
    },

    addTeam(name, conference, bd, coach, rings, logo) {
      var id = this.teams[this.teams.length-1].id + 1;
      this.teams.push({
        id,
        name,
        conference,
        bd,
        coach,
        rings,
        logo
      })
    }
  }
})
