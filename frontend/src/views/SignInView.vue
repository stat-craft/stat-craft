<script setup>
import { reactive, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import useVuelidate from '@vuelidate/core'
import { required, email as emailValidator } from '@vuelidate/validators'

defineComponent({
  name: 'SignInView',
})

const router = useRouter()
const authStore = useAuthStore()

const state = reactive({
  email: '',
  password: '',
  apiError: null,
})

const rules = {
  email: { required, email: emailValidator },
  password: { required },
}

const v$ = useVuelidate(rules, state)

const handleLogin = async () => {
  v$.value.$touch()

  if (v$.value.$invalid) {
    return
  }

  try {
    await authStore.login(state.email, state.password)
    router.push('/')
  } catch (error) {
    if (error.response && error.response.status === 401) {
      state.apiError = error.response.data.message || 'Incorrect email or password'
    } else {
      state.apiError = 'An unexpected error occurred. Please try again.'
    }
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold text-center mb-6">Welcome Back</h2>
      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="state.email"
            placeholder="Your Email"
            class="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <!-- Display error messages for the email input -->
          <span v-if="v$.email.$error" class="text-red-500 text-sm">
            <span
              v-if="!v$.email.$pending && !v$.email.required.$pending && !v$.email.required.$model"
              >Email is required.</span
            >
          </span>
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            v-model="state.password"
            placeholder="Your Password"
            class="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <!-- Display error messages for the password input -->
          <span v-if="v$.password.$error" class="text-red-500 text-sm">
            <span v-if="!v$.password.$pending && !v$.password.required.$model"
              >Password is required.</span
            >
          </span>
        </div>
        <span v-if="state.apiError" class="text-red-500 text-sm">{{ state.apiError }}</span>
        <!-- Submit Button -->
        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Sign In
          </button>
        </div>
      </form>
      <p class="text-center mt-4 text-sm">
        Don't have an account?
        <router-link to="/signup" class="text-green-400 hover:underline"> Sign Up </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
