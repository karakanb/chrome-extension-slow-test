<template>
  <span>
    <div class="px-4 h-full">
      <router-view class="h-full"></router-view>
    </div>
  </span>
</template>

<style>
html {
  width: 400px;
  line-height: 1.15;
  
  /* min-height: 400px; */
  max-height: 500px;
}

body {
  height: 100%;
  width: 400px;
}
</style>
