<template lang="">
  <div>
    <button class='but' >
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'my-button'
}
</script>
<style>
.but {
  padding: 0.7rem;
  margin: 0rem;
  border: 1px solid teal;
  color: white;
  background-color: teal;
}
</style>