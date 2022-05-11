<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="icon" src="../../../assets/img/tabbar/home.svg">
        <img slot="icon-active" src="../../../assets/img/tabbar/home_active.svg">
        <div slot="text">主页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="icon" src="../../../assets/img/tabbar/category.svg">
        <img slot="icon-active" src="../../../assets/img/tabbar/category_active.svg">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="icon" src="../../../assets/img/tabbar/cart.svg">
        <img slot="icon-active" src="../../../assets/img/tabbar/cart_active.svg">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="icon" src="../../../assets/img/tabbar/profile.svg">
        <img slot="icon-active" src="../../../assets/img/tabbar/profile_active.svg">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './TabBar'
  import TabBarItem from './TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }  
  }
</script>

<style scoped>

</style>