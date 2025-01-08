<script>
import heroImage from '@/assets/images/hero.webp'

export default {
  data() {
    return {
      heroImage,
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<template>
  <div class="font-[family-name:var(--font-geist-sans)]">
    <main class="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <section
        class="relative w-full h-screen text-white bg-gray-900"
        :style="{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="relative flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 class="text-4xl font-bold md:text-6xl">Embrace the Mystery</h1>
          <p class="mt-4 text-lg md:text-xl">
            Step into the world of the unknown and uncover the secrets of Call of Cthulhu.
          </p>
          <button
            class="px-6 py-3 mt-8 text-lg font-medium text-gray-900 bg-green-400 rounded-md hover:bg-green-300"
          >
            Get Started
          </button>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-white py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Logo or Brand Name -->
          <div class="text-lg font-bold mb-4 md:mb-0">StatCraft</div>

          <!-- Navigation Links -->
          <nav class="flex space-x-4 mb-4 md:mb-0">
            <a href="#" class="hover:text-green-400 transition-colors">Home</a>
            <router-link to="/about" class="hover:text-green-400 transition-colors"
              >About</router-link
            >
            <a href="#" class="hover:text-green-400 transition-colors">Contact</a>
          </nav>
        </div>
        <!-- Copyright -->
        <div class="text-center text-gray-500 mt-6">
          © {{ currentYear }} StatCraft. All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>
