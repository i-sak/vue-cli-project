<template>
  <!-- <h3>hello vue</h3> -->
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ cnt }}</h1>
    <button @click="cnt++">증가</button>
    <home-component></home-component>
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

// es6에서 모듈을 추출하는 방식 중 하나 export default
export default {
  name: 'App',
  components : {
    homeComponent
  },
  data: () => ({
    title : "Hello Vuetify",
    cnt : 1
  }),
}
</script>
