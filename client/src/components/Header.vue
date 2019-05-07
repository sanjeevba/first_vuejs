<template>
  <v-toolbar fixed flat>
    <v-toolbar-title class="grey--text">
      <span
      class="home"
      @click="navigateTo({name: 'root'})">
      <span class="font-weight-light">
      First
      </span>
      <span>
      VUE.JS
      </span>
    </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
      v-if="!$store.state.isUserLoggedIn"
      flat @click="navigateTo({name: 'login'})">
            Login
        </v-btn>
        <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat @click="navigateTo({name: 'register'})">
          Sign Up
        </v-btn>
        <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat @click="logout">
            Log out
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style scoped>

  .home {
    cursor: pointer;
  }

  .home:hover {
      color: grey;
  }

</style>
