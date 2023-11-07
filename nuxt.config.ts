import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss'
  ]
})
