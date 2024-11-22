<template>
  <div class="song">
    <h1>Stéphane fetcher</h1>
    <div v-for="(line,i) in music" :key=i>
      <p>{{line}}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const music = ref(null);

const user = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/user/listUser', {
      method: 'get',
    });

    if (!response.ok) {
      console.error('La réponse du serveur n\'est pas correcte:', response.statusText);
      return;
    }
    const result = await response.json();
    music.value = result;
    console.log(result, music.value);
  } catch (error) {
    console.error('Erreur lors du fetch showprofil :', error);
  }
};
user();

</script>

<style scoped>

</style>
