import { defineStore } from 'pinia'
import axios from '@/services/axiosInstance'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post('/token/', { username, password })
        this.accessToken = response.data.access
        this.refreshToken = response.data.refresh

        // Save tokens to localStorage
        localStorage.setItem('accessToken', this.accessToken)
        localStorage.setItem('refreshToken', this.refreshToken)

        // Fetch user info or set it manually
        await this.fetchUser()
      } catch (error) {
        console.error('Login failed:', error)
        throw error
      }
    },
    async fetchUser() {
      try {
        const response = await axios.get('/user/')
        this.user = response.data
      } catch (error) {
        console.error('Failed to fetch user:', error)
      }
    },
    logout() {
      this.accessToken = null
      this.refreshToken = null
      this.user = null

      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    },
    async refreshAccessToken() {
      try {
        const response = await axios.post('/token/refresh/', {
          refresh: this.refreshToken,
        })
        this.accessToken = response.data.access
        localStorage.setItem('accessToken', this.accessToken)
      } catch (error) {
        console.error('Token refresh failed:', error)
        this.logout()
      }
    },
  },
})
