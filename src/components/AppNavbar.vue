<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from 'primevue/button'
import logo from '@/assets/logo.svg'

const mobileMenu = ref(false)
const scrolled = ref(false)
const dark = ref(false)

const links = [
  { label: 'Início', href: '#home', icon: 'pi pi-home' },
  { label: 'Sobre', href: '#about', icon: 'pi pi-user' },
  { label: 'Skills', href: '#skills', icon: 'pi pi-code' },
  { label: 'Projetos', href: '#projects', icon: 'pi pi-folder' },
  { label: 'Experiência', href: '#experiences', icon: 'pi pi-box' }
]

function toggleTheme() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
  localStorage.setItem('theme', dark.value ? 'dark' : 'light')
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  dark.value = localStorage.getItem('theme') === 'dark'
  document.documentElement.classList.toggle('dark', dark.value)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="fixed top-4 left-0 w-full z-50">
    <div class="w-full max-w-7xl mx-auto px-3 sm:px-6">
      <div :class="['flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-lg'
          : 'bg-transparent dark:bg-transparent']">
        
        <a href="#home" class="flex items-center gap-2">
          <img :src="logo" class="w-9 h-9 hover:scale-110 transition drop-shadow-[0_0_15px_rgba(251,191,36,.8)]" />
          <span class="text-xl md:text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Luis.dev
          </span>
        </a>

        <nav class="hidden md:flex items-center gap-1">
          <a v-for="item in links" :key="item.label" :href="item.href"
             class="flex items-center gap-2 px-3 py-2 rounded-xl text-zinc-800 dark:text-zinc-200 hover:text-amber-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            <i :class="item.icon"></i>
            {{ item.label }}
          </a>

          <Button
            :text="true"
            rounded
            @click="toggleTheme"
            :icon="dark ? 'pi pi-sun' : 'pi pi-moon'"
            class="text-zinc-700 hover:bg-zinc-100
             dark:text-zinc-300 dark:hover:bg-zinc-800!
              text-orange-500 dark:text-amber-400"
          />
          
          <Button
            as="a"
            href="#contact"
            label="Contato"
            icon="pi pi-send"
            rounded
            class="bg-orange-500 border-orange-500 hover:bg-orange-600
             hover:border-orange-600 dark:bg-orange-600 dark:border-orange-600
              dark:hover:bg-orange-700 text-white transition-colors duration-200"
          />
        </nav>

        <button @click="mobileMenu = !mobileMenu"
                class="md:hidden flex items-center justify-center w-6 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
          <i :class="mobileMenu ? 'pi pi-times' : 'pi pi-bars'"></i>
        </button>
      </div>

      <Transition name="fade-up">
        <div v-if="mobileMenu" class="md:hidden mt-2 p-4 rounded-2xl bg-white/90 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <a v-for="item in links" :key="item.label" :href="item.href" @click="mobileMenu = false"
             class="flex items-center gap-3 px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            <i :class="item.icon"></i>
            {{ item.label }}
          </a>

          <Button
            label="Contato"
            icon="pi pi-send"
            fluid
            class="mt-3 bg-orange-500 border-orange-500
             dark:bg-orange-600 dark:border-orange-600 text-white"
          />

          <div class="flex justify-center mt-2">
            <Button
              :text="true"
              rounded
              @click="toggleTheme"
              :icon="dark ? 'pi pi-sun' : 'pi pi-moon'"
              class="text-amber-500! dark:text-amber-400!"
            />
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-fade-in { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-float { animation: float 6s ease-in-out infinite; }
.fade-up-enter-active { animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.fade-up-leave-active { animation: fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse; }
</style>