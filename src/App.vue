<template>
  <div style="background-color : skyblue; padding : 5px;">
    <h1> name : {{ name }} </h1>
    <v-btn elevation="4" @click="changeName()">이름 변경</v-btn>
    <home-component v-bind:nameOfChild="name"></home-component>
    <!-- <AppStatus></AppStatus> -->
  </div>
  <!-- <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app> -->
</template>

<script>
import homeComponent from "./Home.vue"  // .vue 는 생략 가능

// es6에서 모듈을 추출하는 방식 중 하나 export default
export default {
  name: 'App',
  components : {
    homeComponent
  },
  data: () => ({
    name : "vue project"
  }),
  methods : {
    changeName () { // changeName = function() { }
      this.name = "Vuetify"
    }
  }
}
</script>
