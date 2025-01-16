<script setup>
import { computed, defineComponent } from 'vue'

defineComponent({
  name: 'MainFooter',
})

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
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
</template>

<style lang="scss" scoped></style>
