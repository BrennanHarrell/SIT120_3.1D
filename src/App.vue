<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> | 
    <router-link :to="{ name: 'project'}">Project</router-link> |
    <router-link :to="{ name: 'contact'}">Contact Me</router-link>
  </nav>
  <router-view/>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style>
@import "/public/style.css";
</style>
