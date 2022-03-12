<template>
  <div>
      <router-view v-slot="{Component}">
        <Transition appear name="fade">
          <component :is="Component"></component>
        </Transition>
      </router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.fade-enter-active{
  transition: opacity 0.5s ease;
}
.fade-enter-from{
  opacity: 0;
}
.upperSection{
  display: inline-flex;
}
</style>