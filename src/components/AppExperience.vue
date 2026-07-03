<template>
  <div class="w- flex flex-col items-center justify-center px-4 sm:px-6">

    <div class="flex my-8 sm:my-12">
      <i
        class="pi pi-angle-double-down animate-bounce text-7xl sm:text-8xl transition-colors duration-300 hover:text-amber-500"
        style="color: #fb7b2b;"
      ></i>
    </div>

    <section id="experiences" class="w-full max-w-3xl mx-auto mt-4 px-2">

      <div class="text-center mb-16 sm:mb-24">
        <h2 class="inline-block text-4xl sm:text-6xl font-extrabold text-neutral-950 dark:text-neutral-50 tracking-wide relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-transparent after:to-orange-500">
          EXPERIÊNCIAS
        </h2>
      </div>

      <Timeline
        :value="experiences"
        align="alternate"
        class="w-full"
        :pt="{
          event: { class: '@max-[480px]:flex-row!' }, 
          eventOpposite: { class: '@max-[480px]:hidden' },
          eventConnector: { class: 'bg-orange-500/30!' },
          eventContent: { class: '!text-left' }
        }"
      >
        <!-- Marcador central (maleta) -->
        <template #marker>
          <span class="z-10 flex items-center justify-center w-14 h-14 rounded-full bg-neutral-950
            dark:bg-zinc-900 shadow-lg shadow-orange-500/50 border-2 border-orange-500 shrink-0">
            <i class="pi pi-briefcase text-orange-500 text-sm"></i>
          </span>
        </template>

        <!-- Card de conteúdo -->
        <template #content="slotProps">
          <div class="group relative w-full rounded-2xl bg-neutral-950 dark:bg-zinc-900 p-2 shadow-lg shadow-orange-500/20
           transition-transform duration-300 hover:-translate-y-1 hover:shadow-orange-500/50 overflow-hidden
           mb- sm:mb-0">

            <span class="absolute top-0 right-0 h-full w-1 bg-orange-500 transition-all duration-500 group-hover:w-2"></span>

            <span class="block text-xs font-bold tracking-widest md:px-4 px-1 text-orange-500 uppercase">
              {{ slotProps.item.period }}
            </span>

            <h3 class="text-lg font-bold text-neutral-50 md:px-4 px-1 mb-1 leading-snug">
              {{ slotProps.item.role }}
            </h3>

            <p class="text-sm font-medium md:px-4 px-1 text-orange-400 mb-3">
              {{ slotProps.item.company }}
            </p>

            <p class="text-sm text-neutral-300 md:px-4 px-1 leading-relaxed">
              {{ slotProps.item.description }}
            </p>
          </div>
        </template>
      </Timeline>

    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Timeline from 'primevue/timeline'

const experiences = ref([
  {
    period: '2026 — Atual',
    role: 'Scrum Master / Desenvolvedor Django Fullstack',
    company: 'CAPACITA CEPEDI Fase 2',
    description: 'Atuando como Scrum Master do projeto da criação de um sistema de alocação de aulas e horários (IFBA).'
  },
  {
    period: '02/2026 — 04/2026',
    role: 'Freelance em Desenvolvimento Fullstack',
    company: 'LAFMED',
    description: 'Desenvolvimento de site com Vue.js, FastAPI e PostgreSQL como banco de dados e Docker para DevOps.'
  },
  {
    period: '07/2025 — 09/2025',
    role: 'Criação de Dashboards no PowerBI',
    company: 'Criative Agência',
    description: 'Criação de BIs e Análise de Dados com PowerBI, Excel e Python para entrega de KPIs e Informações.'
  }
])
</script>