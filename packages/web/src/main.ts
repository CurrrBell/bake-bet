import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';

export const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi }
    },
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                colors: {
                    primary: '#6D28D9',    // saturated purple
                    secondary: '#C026D3',  // electric cyan
                    accent: '#FFD400',     // neon gold
                    success: '#00E676',
                    warning: '#FF9100',
                    error: '#FF1744'
                }
            }
        }
    }
})

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(vuetify)
    .mount('#app');
