<template>
    <footer class="w-full bg-black/90 dark:bg-white">
      <div class="max-w-7xl mx-auto px-6 py-10">
  
        <div class="flex flex-col items-center gap-6">
  
          <!-- Logo -->
          <img
            src="@/assets/logo.svg"
            class="h-12"
            alt="Logo"
          >
  
          <!-- Linha -->
          <hr class="w-full border-orange-400/40">
  
          <!-- Redes -->
          <div class="flex gap-8">
  
            <a
              href="https://wa.me/5577999081860?text=Olá,%20gostaria%20de%20conversar%20sobre%20um%20projeto%20que%20desejo%20desenvolver."
              target="_blank"
              class="dark:text-green-600 text-green-500 transition-all duration-300 hover:text-orange-400 hover:-translate-y-1"
            >
              <i class="pi pi-whatsapp text-2xl"></i>
            </a>
  
            <a
              href="https://github.com/LuisF-08"
              target="_blank"
              class="text-black transition-all duration-300 hover:text-orange-400 hover:-translate-y-1"
            >
              <i class="pi pi-github text-2xl"></i>
            </a>
  
            <a
              href="https://www.linkedin.com/in/luisfilipe-novais/"
              target="_blank"
              class="dark:text-blue-500 text-sky-500 transition-all duration-300 hover:text-orange-400 hover:-translate-y-1"
            >
              <i class="pi pi-linkedin text-2xl"></i>
            </a>
  
          </div>
  
          <!-- Copyright -->
          <p class="text-center text-sm text-slate-400 dark:text-slate-700">
            © 2026 Luís Filipe. Todos os direitos reservados.
            <br>
            Feito com <strong class="text-green-500">Vue</strong> e <strong class="text-green-500">PrimeVue</strong>.
          </p>
  
        </div>
  
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>