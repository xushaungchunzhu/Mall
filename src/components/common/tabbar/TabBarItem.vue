<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive" class="item-icon">
      <slot name="icon"></slot>
    </div>
    <div v-else class="item-active-icon">
      <slot name="icon-active"></slot>
    </div>
    <div class="item-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return false;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
  }
  .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>