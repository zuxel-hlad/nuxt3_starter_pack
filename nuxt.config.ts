// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
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

    modules: ['@pinia/nuxt'],
});
