<script setup>
import { ref } from 'vue'
import heroImage from '@/assets/images/hero.webp'

const image = ref(heroImage)
</script>

<template>
  <div class="font-[family-name:var(--font-geist-sans)]">
    <main class="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <section class="relative w-full h-screen text-white bg-gray-900" :style="{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="relative flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 class="text-4xl font-bold md:text-6xl">Embrace the Mystery</h1>
          <p class="mt-4 text-lg md:text-xl">
            Step into the world of the unknown and uncover the secrets of Call of Cthulhu.
          </p>
          <router-link to="/signup">
            <button class="px-6 py-3 mt-8 text-lg font-medium text-gray-900 bg-green-400 rounded-md hover:bg-green-300">
              Sign Up
            </button>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
