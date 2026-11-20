<script setup>
    import {onBeforeMount, ref} from "vue";
    import { useGlobalStore } from "../stores/global";
    const {user} = useGlobalStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="navbar-brand fw-bold text-success fs-3">Fitness</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link :to="{ name: 'Workouts' }" class="nav-link">Workouts</router-link>

          <!-- <router-link :to="{ name: 'Register' }" class="nav-link" v-if="!user.email">Register</router-link> -->
          <router-link :to="{ name: 'Login' }" class="nav-link" v-if="!user.email">Login</router-link>
          <router-link :to="{ name: 'Logout'}" class="nav-link" v-else>Logout</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>