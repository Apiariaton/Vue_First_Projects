<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role">
      </user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  // props: ['teamId'],
  inject: ['users','teams'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods:
  {
    //Or loadTeamMembersFromParam(teamId)
    loadTeamMembersFromParam(route)
    {
      const teamId = this.route.params.teamId; 
      const selectedTeam = this.teams.find(team => team.id == teamId);
      
      const memberIDsOfSelectedTeam = selectedTeam.members;

      const selectedTeamName = selectedTeam.name;
      const selectedMembersOfTeam = [];

      for (const memberID of memberIDsOfSelectedTeam)
      {
        const selectedUser = this.users.find(user => user.id == memberID);
        selectedMembersOfTeam.push(selectedUser);
      }

      this.members = selectedMembersOfTeam;
      this.teamName = selectedTeamName;
    }
  },
  created() {
    this.loadTeamMembersFromParam(this.$route);
  },
  watch: {
    $route(newRoute)
    {
      this.loadTeamMembersFromParam(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>