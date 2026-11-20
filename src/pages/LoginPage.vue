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

        <button type="submit" class="btn btn-success w-100 py-2">
          Login
        </button>
      </form>

      <div class="text-center mt-4">
        <small class="text-muted">
          Don't have an account?
          <router-link :to="{name: 'Register'}" class="text-success text-decoration-none cursor-pointer">Register</router-link>
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
    const showPassword = ref(false);
    

    const submit = async () => {
        try {

            const res = await api.post('/users/login', {
                email: email.value,
                password: password.value
            });

            if (res.data) {
                notyf.success("Login Successful");

                localStorage.setItem("token",res.data.access);

                getUserDetails(res.data.access);

                email.value = "";
                password.value = "";

                router.push({path: "/"});
            }
        } catch (err) {
            console.error(err.response);
            notyf.error('login failed');
        }
    }

    onBeforeMount(()=>{
        if(user.token){
            router.push({path: "/"})
        }
    })
</script>
