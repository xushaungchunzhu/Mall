<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/common/tabbar/MainTabBar'
export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>

</style>
