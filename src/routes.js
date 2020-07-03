import TeamsList from './TeamsList'
import TeamDetails from './TeamDetails'
import TeamAdd from "./TeamAdd"


export const routes = [
  {
    path: '/',
    component: TeamsList,
    name: 'home'
  },

  {
    path: '/add',
    component: TeamAdd,

  },

  {
    path: '/detail/:id',
    component: TeamDetails,
    name: 'team-details',
    props: true
  },

  {
    path: '*',
    component: TeamsList
  },

]

