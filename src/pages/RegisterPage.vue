<template>
  <div class="container min-vh-100 d-flex justify-content-center align-items-center">
    <div class="card shadow p-4 border-0 w-100" style="max-width: 420px;">

      <div class="text-center mb-4">
        <h2 class="fw-bold text-success">Fitness Tracker</h2>
        <p class="text-muted">Track your progress. Stay consistent.</p>
      </div>

      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
            v-model="email"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <div class="input-group">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="form-control"
              id="password"
              placeholder="Enter your password"
              v-model="password"
              required
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
          </div>
        </div>

        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirm Password</label>
          <div class="input-group">
            <input
              :type="showCPassword ? 'text' : 'password'"
              class="form-control"
              id="confirmPassword"
              placeholder="Enter your password"
              v-model="confirmPassword"
              required
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="showCPassword = !showCPassword"
            >
              {{ showCPassword ? 'Hide' : 'Show' }}
            </button>
          </div>
        </div>

        <button type="submit" class="btn btn-success w-100 py-2">
          Register
        </button>
      </form>

      <div class="text-center mt-4">
        <small class="text-muted">
          Already have an account?
          <router-link :to="{name: 'Login'}" class="text-success text-decoration-none cursor-pointer">Login</router-link>
        </small>
      </div>

    </div>
  </div>
</template>

<script setup>
    import { ref, watch, onBeforeMount } from 'vue'
    import { useGlobalStore } from '../stores/global';
    import { useRouter } from 'vue-router';

    import { Notyf } from 'notyf';

    import api from '../api'

    const router = useRouter();
    const {getUserDetails, user} = useGlobalStore();
    const notyf = new Notyf();

    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const showPassword = ref(false);
    const showCPassword = ref(false);
    

    const submit = async () => {
        try {
            if (password.value != confirmPassword.value) {
                notyf.error("Passwords do not match!");
                return
            }

            const res = await api.post('/users/register', {
                email: email.value,
                password: password.value
            });

            if (res.data) {
                notyf.success("Registered Successful");

                email.value = "";
                password.value = "";
                confirmPassword.value = "";

                router.push({path: "/login"});
            }
        } catch (err) {
            console.error(err.response);
            notyf.error("Registered Failed");
        }
    }

    onBeforeMount(()=>{
        if(user.token){
            router.push({path: "/"})
        }
    })
</script>
