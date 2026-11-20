<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">

        <div class="card shadow-sm border-0">
          <div class="card-body p-4">

            <h2 class="fw-bold mb-4">Add Workout</h2>

            <form @submit.prevent="addWorkout">
              <div class="mb-3">
                <label for="name" class="form-label">Workout Name</label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Enter workout name"
                  v-model="name"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="duration" class="form-label">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  id="duration"
                  class="form-control"
                  placeholder="Enter duration"
                  v-model="duration"
                  min="1"
                  required
                />
              </div>

              <button type="submit" class="btn btn-success w-100">
                Add Workout
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { Notyf } from 'notyf';
    import { useRouter } from 'vue-router';
    import api from '../api'

    const notyf = new Notyf();
    const router = useRouter();


    const name = ref('')
    const duration = ref('')

    const addWorkout = async () => {
        try {
            const res = await api.post('/workouts/addWorkout', {
                name: name.value,
                duration: `${duration.value} mins`
            });

            if (res.data) {
                notyf.success("Successfully Added Workout");

                name.value = "";
                duration.value = "";
                router.push({name: 'Workouts'})
            }
        } catch (err) {
            console.error(err)
            if (err.response.status === 409) notyf.error(err.response.data.message);
            else notyf.error("Failed to add workout. Please contact administrator")
        }
    }
</script>
