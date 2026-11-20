
<template>
  <div class="home-page">

    <!-- Hero Section -->
    <section class="container py-5">
      <div class="row align-items-center min-vh-75">

        <!-- Hero Text -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h1 class="display-2 fw-bold">
            Welcome to
            <span class="text-success">Fitness!</span>
          </h1>

          <h3 class="mt-3">Your personal fitness companion.</h3>

          <p class="lead text-secondary mt-4">
            Track your workouts, stay consistent, and reach your goals.
            Start building healthier habits and take control of your fitness journey.
          </p>

          <router-link :to="{name: 'Workouts'}" class="btn btn-success btn-lg mt-3 px-5">
            Get Started
          </router-link>
        </div>

        <!-- Hero Image -->
        <div class="col-lg-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            alt="Fitness gym equipment"
            class="img-fluid rounded-4"
          />
        </div>

      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-light py-5">
      <div class="container">

        <div class="text-center mb-5">
          <h2 class="fw-bold">What You Can Do With FitTrack</h2>
          <p class="text-secondary">
            Everything you need to stay active and motivated.
          </p>
        </div>

        <div class="row g-4">

          <!-- Feature 1 -->
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 text-center p-4">
              <div class="fs-1 mb-3">🏋️</div>
              <h4 class="fw-bold">Track Workouts</h4>
              <p class="text-secondary mb-0">
                Record your exercises and keep track of your fitness activities.
              </p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 text-center p-4">
              <div class="fs-1 mb-3">🎯</div>
              <h4 class="fw-bold">Set Your Goals</h4>
              <p class="text-secondary mb-0">
                Create personal fitness goals and work toward them at your own pace.
              </p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 text-center p-4">
              <div class="fs-1 mb-3">📈</div>
              <h4 class="fw-bold">Monitor Progress</h4>
              <p class="text-secondary mb-0">
                Review your workout history and see how far you've come over time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="container py-5 text-center">
      <h2 class="fw-bold">Every Step Counts.</h2>
      <p class="text-secondary mt-3">
        Start today. Stay active. Become a healthier version of yourself.
      </p>

      <router-link :to="{name: 'Workouts'}" class="btn btn-success px-4 py-2 mt-2">
        Start Your Journey
      </router-link>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p class="mb-0">
        &copy; 2026 FitTrack. Stay active, stay healthy.
      </p>
    </footer>

  </div>
</template>

<script setup>
// Homepage introduction only.
// No fitness statistics or dashboard data.
</script>
