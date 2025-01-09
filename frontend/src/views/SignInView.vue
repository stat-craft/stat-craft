<script>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

export default {
  name: 'SignInView',
  setup() {
    const username = ref('')
    const password = ref('')
    const authStore = useAuthStore()

    const handleLogin = async () => {
      try {
        await authStore.login(username.value, password.value)
        alert('Login successful!')
      } catch (error) {
        alert('Login failed!')
        console.log(error)
      }
    }

    return { username, password, handleLogin }
  },
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold text-center mb-6">Welcome Back</h2>
      <form @submit.prevent="handleSignIn">
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
          @click="handleLogin"
          type="submit"
          class="w-full px-4 py-2 bg-green-400 text-gray-900 rounded-md hover:bg-green-300"
        >
          Sign In
        </button>
      </form>
      <p class="text-center mt-4 text-sm">
        Don't have an account?
        <router-link to="/signup" class="text-green-400 hover:underline"> Sign Up </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
