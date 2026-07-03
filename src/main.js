import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

// Ícones e Estilos Globais
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/main.css'

import ToastService from 'primevue/toastservice'

// IMPORTAR OS COMPONENTES DO PRIMEVUE AQUI
import Avatar from 'primevue/avatar'
import ScrollPanel from 'primevue/scrollpanel'
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import OrganizationChart from 'primevue/organizationchart';

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark'
        }
    }
})
app.use(ToastService)

// REGISTRAR OS COMPONENTES GLOBALMENTE
app.component('Avatar', Avatar)
app.component('ScrollPanel', ScrollPanel)
app.component('InputGroup', InputGroup)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('OrganizationChart',OrganizationChart)

app.mount('#app')