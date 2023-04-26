// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    css: ['~/assets/scss/styles.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "~/assets/scss/_variables.scss"; 
                    `,
                },
            },
        },
    },
    typescript: {
        strict: true,
    },
    modules: ['@nuxtjs/eslint-module', '@pinia/nuxt'],
});
