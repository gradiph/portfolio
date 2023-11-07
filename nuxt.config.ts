import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-simple-sitemap'
  ]
})
