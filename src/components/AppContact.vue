<template>
    <div class="w-full flex flex-col items-center justify-center px-4 sm:px-6 mt-20 overflow-hidden">
        <section id="contact" class="w-full max-w-6xl mt-4 py-6">
            <div class="w-full flex justify-center">
                <div class="relative inline-block mb-10 text-center select-none cursor-default">
      
                    <div class="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4
                     border-orange-500 rounded-tl-lg pointer-events-none"></div>
                    <div class="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4
                     border-amber-500 rounded-br-lg pointer-events-none"></div>
    
                    <h2 class="relative px-8 py-4 text-4xl sm:text-6xl font-black tracking-tighter
                               border border-neutral-900/10 dark:border-neutral-100/10 
                            bg-white dark:bg-white/40 backdrop-blur-md rounded-xl
                               dark:shadow-[4px_4px_0px_rgba(249,115,22,1)] shadow-[4px_4px_0px_rgba(9,0,5,0.83)]">
                      <span class="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 
                      bg-clip-text text-transparent drop-shadow-sm">
                        DESEJA ME CONTATAR?
                      </span>
                    </h2>
                </div>
            </div>

            <!-- Ajustado também o texto abaixo (removida a classe inválida align-items) -->
            <div class="text-center mx-auto mt-6 px-20">
                <p class="text-base text-xl sm:text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                  Ficou interessado?<br>
                  Deseja contruir algo Digitalmente? <br>
                  Me contate em minhas redes para eu solucionar!!!
                </p>
            </div>

            <div class="w-full flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 pb-10 sm:pb-6">
                <a 
                    v-for="(contato, indice) in contatos" 
                    :key="indice"
                    :href="contato.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="botao-flutuante group relative flex items-center justify-center 
                    shrink-0 w-14 h-14 md:w-24 md:h-24 rounded-full border border-neutral-900
                     dark:border-neutral-100 dark:bg-neutral-900/80
                      text-neutral-900 dark:text-neutral-50
                      transition-all duration-300 hover:-translate-y-1 hover:text-orange-500 dark:hover:text-orange-400 
                      shadow-[4px_4px_0px_rgba(23,23,23,1)] dark:shadow-[4px_4px_0px_rgba(249,115,22,1)]"
                >
                    <i :class="contato.icon" class="text-2xl transition-transform duration-300 group-hover:scale-110"></i>
                </a>
            </div>
        
        </section>
    </div>
</template>

<script setup>
const contatos = [
    {
        icon: 'pi pi-github',
        href: 'https://github.com/LuisF-08',
    },
    {
        // CORRIGIDO: de 'pi-whattsapp' para 'pi-whatsapp'
        icon: 'pi pi-whatsapp', 
        href: 'https://wa.me/5577999081860?text=Olá,%20gostaria%20de%20conversar%20sobre%20um%20projeto%20que%20desejo%20desenvolver.', 
    },
    {
        icon: 'pi pi-inbox',
        href: 'mailto:luisfilipemnovais@gmail.com',
    },
    {
        icon: 'pi pi-linkedin',
        href: 'https://www.linkedin.com/in/luisfilipe-novais/',
    }
]
</script>

<style scoped>
.stack-group {
  opacity: 0;
  animation: fade-up 0.5s ease-out forwards;
}

.skill-chip {
  opacity: 0;
  animation: fade-up 0.4s ease-out forwards;
}

@keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px); /* Sobe 8px no meio da animação */
    }
  }
  
  /* Como você aplica na classe do elemento: */
.botao-flutuante {
    animation: float 3s ease-in-out infinite; /* 'infinite' faz rodar para sempre */
}
  
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .stack-group,
  .skill-chip {
    animation: none;
    opacity: 1;
  }
}
</style>