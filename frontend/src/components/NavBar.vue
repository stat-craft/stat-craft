<script>
import { ref } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      isMenuOpen,
      toggleMenu,
    }
  },
}
</script>

<template>
  <nav class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-lg font-bold">
        <router-link to="/">StatCraft</router-link>
      </div>

      <!-- Links for larger screens -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="hover:text-green-400 transition-colors"> Home </router-link>
        <router-link to="/about" class="hover:text-green-400 transition-colors">
          About
        </router-link>
        <router-link to="/" class="hover:text-green-400 transition-colors"> Features </router-link>
        <router-link to="/" class="hover:text-green-400 transition-colors"> Contact </router-link>
      </div>

      <!-- Sign In / Sign Out Buttons -->
      <div class="hidden md:flex space-x-4">
        <router-link to="/signin">
          <button class="px-4 py-2 bg-green-400 text-gray-900 rounded-md hover:bg-green-300">
            Sign In
          </button>
        </router-link>
        <router-link to="/signup">
          <button class="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Sign Up</button>
        </router-link>
      </div>

      <!-- Hamburger menu for smaller screens -->
      <button class="block md:hidden" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 6.75a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15zm0 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15zm0 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-800">
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 hover:text-green-400"> Home </a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 hover:text-green-400"> About </a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 hover:text-green-400"> Features </a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 hover:text-green-400"> Contact </a>
      <div class="flex flex-col space-y-2 px-4 mt-2">
        <button class="w-full px-4 py-2 bg-green-400 text-gray-900 rounded-md hover:bg-green-300">
          Sign In
        </button>
        <button class="w-full px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Sign Out</button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
