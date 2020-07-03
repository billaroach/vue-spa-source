<template>
<div>
  <div>
    <slot></slot>
  </div>
  <div>
    <slot name="subtitle"></slot>
  </div>
</div>
</template>


<script>
  export default {

  }
</script>


<style scoped>
  h1, h2  {
    text-align: center;
  }
</style>
