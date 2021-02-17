<template>
  <div>
    <b-modal v-on:bv::modal::hidden="this.$emit('modelHidden',this.modalFlag)" v-model="modalFlag">Hello From Modal!</b-modal>
  </div>
</template>
<script>
  export default {
    name:"LoginModal",
    props:{
      viewModalFlag:Boolean
    },
    data(){
      return {
        modalFlag: false
      }
    }

  }
</script>
<style>

</style>