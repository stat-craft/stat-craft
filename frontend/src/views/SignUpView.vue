<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleSignUp() {
      console.log('Email:', this.email)
      console.log('Password:', this.password)
      // Add your sign-in logic here
    },
  },
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold text-center mb-6">Create an Account</h2>
      <form @submit.prevent="handleSignUp">
        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Your Email"
            class="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <!-- Password -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Your Password"
            class="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <!-- Submit -->
        <button
          type="submit"
          class="w-full px-4 py-2 bg-green-400 text-gray-900 rounded-md hover:bg-green-300"
        >
          Sign Up
        </button>
      </form>
      <p class="text-center mt-4 text-sm">
        Already have an account?
        <router-link to="/signin" class="text-green-400 hover:underline"> Sign In </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Add any scoped styles here, if necessary */
</style>
