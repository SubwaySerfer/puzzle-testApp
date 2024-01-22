<script  lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/layout/TheHeader.vue'

export default defineComponent({
  components: {
    TheHeader
  }
})
</script>

<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" class="component"></component>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.test {
  color: $bgColor;
}
</style>
