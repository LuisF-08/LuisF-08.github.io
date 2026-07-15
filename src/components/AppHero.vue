<template>
  <section id="home" class="w-full min-h-screen flex items-center justify-center pt-24 pb-12 lg:py-0 overflow-hidden">
    <div class="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 px-6 sm:px-10 lg:px-20">
  
      <!-- Texto -->
      <div class="w-full lg:w-1/2 fade-up-enter-active text-center lg:text-left">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight animate-fade-in text-neutral-950 dark:text-neutral-50">
          Olá, eu sou
          <span class="text-amber-500 block sm:inline">Luis Filipe</span>
        </h1>
  
        <h2 class="mt-4 text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
          Desenvolvimento Full Stack, Anáise de Dados e Automações.
        </h2>
  
        <p class="mt-6 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0">
          Estudante de Sistemas de Informação no IFBA e Desenvolvedor Full Stack.
          Tenho experiência com <a class="text-green-500 underline decoration-green-500/30 font-medium">Vue.js</a>, 
          <a class="text-emerald-600 dark:text-emerald-400 underline decoration-emerald-500/30 font-medium">Django/FastAPI</a>, 
          <a class="text-amber-700 dark:text-amber-500 underline decoration-amber-700/30 font-medium">Java</a> e 
          <a class="text-yellow-600 dark:text-yellow-400 underline decoration-yellow-500/30 font-medium">Python</a>, atuando 
          também com automação de processos e análise de dados.
        </p>

        <a href="https://github.com/LuisF-08"
          target="_blank"
          rel="noopener noreferrer"
          class="fade-up-enter-active group relative inline-flex h-12 items-center justify-center overflow-hidden
                 rounded-full border border-neutral-300 dark:border-zinc-700
                 bg-transparent dark:bg-transparent
                 px-6 font-medium text-neutral-700 dark:text-neutral-200
                 transition-all duration-100
                 [box-shadow:5px_5px_rgb(82_82_82)]
                 dark:[box-shadow:5px_5px_rgb(161_161_170)]
                 hover:translate-x-[3px]
                 hover:translate-y-[3px]
                 hover:[box-shadow:0px_0px_rgb(82_82_82)]
                 dark:hover:[box-shadow:0px_0px_rgb(161_161_170)]
                 active:scale-95 cursor-pointer">
          <span
            class="flex items-center gap-4 text-xl font-bold tracking-wider transition-colors duration-200"
          >
            <i class="pi pi-github text-2xl"></i>
            Meu Github
          </span>
</a>
      

      </div>
  
      <!-- Foto (Centralizada e Responsiva) -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end fade-up-enter-active">
        <div class="relative group w-full max-w-[320px] sm:max-w-[400px]">
          <img
            src="@/assets/images/eu-editado.png"
            class="hover-perspective w-full h-auto object-cover rounded-[40px] shadow-xl"
            alt="Luis Filipe"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hover-perspective {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
}

.hover-perspective:hover {
  transform: translateY(-5px) scale(1.03) rotate(1deg);
  box-shadow: 0 30px 40px -10px rgb(0 0 0 / 0.25);
}

.animate-fade-in {
  animation: fadeInUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.fade-up-enter-active {
  animation: fadeInUp 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

</style>