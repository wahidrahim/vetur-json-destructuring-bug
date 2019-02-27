<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { vueFile } from '@/assets/test.json'; // VSCode error: Module ''*.json'' has no exported member 'vueFile'.
import jsonFile from '@/assets/test.json'; // importing without destructuring works

@Component
export default class App extends Vue {
  private created() {
    console.log(vueFile); // shows "This is a .vue file"
    console.log(jsonFile) // shows test.json as an object
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
