<template>
  <div class="top">
    <div class="nav">
      <div class="containerNavBar" :style="{ backgroundColor: colorNavBar }">
          <img src="./../assets/burger.svg" alt="burger" class="icon"
            @click="menu" @keydown.enter="menu" @keydown.space="menu">
            <transition name="slide-right">
              <div v-if="isMenuOpen" class="burger-dropdown">
                <ul>
                <li><router-link @click="menu" to="/">Accueil</router-link></li>
                <li><router-link @click="menu" to="/connexion">Se connecter</router-link></li>
                <li><router-link @click="menu" to="/faq"></router-link>FaQs</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  colorNavBar: String,
});

const isMenuOpen = ref(false);

const menu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

</script>

<style scoped>
  @media(max-width: 767px) {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .top {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      padding: 16px;
      position: relative;
    }
    .nav {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: center;
    }
    .icon {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      color: white;
    }
    .icon2 {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
    .logo {
      position: absolute;
      height: 40px;
      top: 15px;
      left: 15px
    }
    .search-container {
      position: absolute;
      top: 11px;
      right: 0;
      width: 100vw;
      height: 25.5vh;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 100;
    }
    .search-input {
      background-color: #fff;
      width: 90%;
      padding: 10px;
      border: none;
      border-bottom: 1px solid #3A231F;
      font-size: 16px;
      margin: 20px;
      outline: none;
    }
    .recherche-btn {
      background-color: #5a93e4;
      color: white;
      border: none;
      padding: 10px;
      font-size: 14px;
      border-radius: 5px;
      cursor: pointer;
    }
    label {
      font-weight: bolder;
    }
    .slide-right-enter-active {
      transition: all 0.3s ease-out;
    }
    .slide-right-leave-active {
      transition: all 0.3s ease-in;
    }
    .slide-right-enter-from,
    .slide-right-leave-to {
      transform: translateX(20px);
      opacity: 0;
    }
    .burger-dropdown {
      position: absolute;
      top: 60px;
      right: 0;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      z-index: 101;
    }
    .burger-dropdown ul {
      list-style: none;
      padding: 0;
    }
    .burger-dropdown ul li {
      /*margin: 10px 0;*/
      border-bottom: 1px solid #2a2240;
    }
    .burger-dropdown ul li:last-child {
      border-bottom: none;
    }
    .burger-dropdown ul li a {
      text-decoration: none;
      color: #FFECE6;
      font-weight: bold;
      font-size: 20px;
      padding: 5px 0 5px 0;
    }
    li {
      padding: 10px 0 10px 0;
    }
    .burger-dropdown .deco {
      color: #ff7f7f;
    }
  }
</style>
