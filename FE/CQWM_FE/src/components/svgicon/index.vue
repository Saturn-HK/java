<template>
  <svg aria-hidden="true" width="100" height="100" >
    <use :href="compname" :fill="color"></use>
  </svg>
</template>

<script setup>
import {  computed } from 'vue'
import { ref } from "vue";

const props=defineProps({
  name: String,
  color: String
})
let color=ref("white")
let compname = computed(() => {

    return ('#'+props.name)
  })
console.log(compname)




</script>

<style>

svg {
}

</style>
