<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Workouts</h2>
      <router-link :to="{name : 'AddWorkout'}" class="btn btn-success">
        + Add Workout
      </router-link>
    </div>
    <div class="row g-3">
      <div
        v-for="workout in workouts"
        :key="workout._id"
        class="col-12 col-md-6 col-lg-4"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ workout.name }}</h5>

            <p class="card-text text-muted">
              {{ workout.description }}
            </p>

            <p class="mb-1">
              <strong>Duration:</strong> {{ workout.duration }}
            </p>

            <p class="mb-0">
              <strong>Status:</strong> {{ workout.status }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref, onBeforeMount } from 'vue';
    import { useGlobalStore } from '../stores/global';
    import api from '../api';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const {user} = useGlobalStore();

    const workouts = ref([]);

    const fetchWorkouts = async () => {
        try {
            const res = await api.get('/workouts/getMyWorkouts')
            workouts.value = res.data.workouts

        } catch (err) {
            console.error(err)
        } 
    }

    onBeforeMount(()=>{
        if(!user.token){
            router.push({path: "/login"})
        }

        fetchWorkouts();
    })
</script>