export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDilog() {  this.$emit('update:show', false)} 
  },
  mounted() {

  }
}