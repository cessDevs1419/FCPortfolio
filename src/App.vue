<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import NavbarComponent from './components/components/NavbarComponent.vue';
  import HomeView from './views/HomeView.vue';
</script>

<script>
  export default {
    data(){
      return{
        mode: false
      }
    },
    methods:{
      toggleDarkMode(mode){
        this.mode = mode
      }
    }
  }
</script>
<template>
  <NavbarComponent 
    @dark-mode="toggleDarkMode"
  >
  </NavbarComponent>
  <HomeView
    :dark_mode="mode"
  >
  </HomeView>
</template>


