<template>
  <div>
    <v-container grid-list-xl text-xs-center>
      <v-layout column>
        <v-flex xs12 sm6 md3 order-md4 order-sm2>
          <div class="white elevation-24">
            <v-toolbar flat dense dark class="blue darken-3">
              <v-toolbar-title class="font-weight-regular">Login</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
              <form name="MyFirstVue">
                <v-text-field label="Email" v-model="email"></v-text-field>
                <br>
                <v-text-field type="password" label="Password" v-model="password"></v-text-field>
                <br>
                <div class="error" v-html="error"></div>
                <v-btn class="blue darken-3" dark @click="login">Login</v-btn>
              </form>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = ''
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'root'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: white;
}
</style>
