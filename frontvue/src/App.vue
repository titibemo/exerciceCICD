<template>
  <Navbar
    colorNavBar='#111111'
  ></Navbar>
  <router-view/>
</template>

<script setup>
import Navbar from './components/NavbarComp.vue';
</script>

<style>
body{
  background-color: #111111;
  color: white;
}

</style>
