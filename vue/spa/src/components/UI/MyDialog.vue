<template>
  <div class="dialog" v-if="show === true" @click="hideDilog">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '../../mixins/toggleMixin';

export default {
  name: 'my-dialog',
  mixins: [toggleMixin ]
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}

.dialog-content {
  border-radius: 1rem;
  margin: auto;
  background-color: white;
  padding: 1rem;
}
</style>