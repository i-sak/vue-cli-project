<template>
  <div style="background-color : skyblue; padding : 5px;">
    <h2> user.name : {{ user.name }} </h2>
    <h2> user.age : {{ user.age }} </h2>
    <h2> {{ getDateAndTime(createAt) }} </h2>
    <v-btn elevation="4" @click="changeName()">이름 변경</v-btn>
    <home-component 
      :name="user.name"
      :age="user.age"
      @child="parents"></home-component>
    <AppStatus></AppStatus>
  </div>
  <!-- <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app> -->
</template>

<script>
import homeComponent from "./Home.vue"  // .vue 는 생략 가능
import { dateFormat } from "./mixins/dateFormat"

// es6에서 모듈을 추출하는 방식 중 하나 export default
export default {
  name: 'App',
  components : {
    homeComponent
  },
  data: () => ({
    user : {
      name : "vuer",
      age : 20
    },
    createAt : null,
  }),
  created () {
    this.createAt = new Date()
  },
  methods : {
    changeName () { // changeName = function() { }
      this.name = "Vuetify"
    },
    parents (user) {
      console.log(user)
      this.user.name = user.name
      this.user.age = user.age
    },
  },
  mixins : [dateFormat]
}
</script>
