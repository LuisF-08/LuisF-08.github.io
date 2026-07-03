<template>
    <div class="w-full flex flex-col items-center justify-center px-4 sm:px-6 mt-20 overflow-hidden">
  
      <div class="text-center mb-16">
        <div class="relative inline-block">
          <div class="absolute -inset-2 -z-10 bg-orange-500/20
           dark:bg-orange-400/30 blur-xl rounded-2xl pointer-events-none"></div>
          <h2 class="relative inline-flex items-center justify-center px-8 py-3 text-4xl sm:text-5xl
                     font-extrabold tracking-wide rounded-xl border cursor-default select-none transition-colors duration-300
                     border-neutral-900 bg-orange-500/80 text-neutral-900 
                     [box-shadow:6px_6px_0px_rgba(23,23,23,1)]
                     dark:border-orange-500 dark:bg-neutral-900/80 dark:text-neutral-50 
                     dark:[box-shadow:6px_6px_0px_rgba(245,245,245,1)]">
            CURSOS
          </h2>
        </div>
      </div>
  
      <section id="skills" class="w-full max-w-6xl mt-4 py-6">
        <div class="flex flex-col gap-10">
  
          <div
            v-for="(group, gIndex) in groupedSkills"
            :key="group.category"
            class="stack-group"
            :style="{ animationDelay: `${gIndex * 90}ms` }"
          >
            <!-- "comentário" de categoria, estilo código -->
            <div class="flex items-center gap-3 mb-4 px-1">
              <span class="font-mono text-xs sm:text-sm text-orange-500
               dark:text-orange-400 tracking-wider whitespace-nowrap">
                // {{ group.category }}
              </span>
              <span class="flex-1 h-px bg-neutral-800 dark:bg-neutral-700"></span>
              <span class="font-mono text-[10px] sm:text-xs text-neutral-500">
                {{ String(group.items.length).padStart(2, '0') }}
              </span>
            </div>
  
            <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div
                v-for="(skill, index) in group.items"
                :key="skill.name"
                class="skill-chip group relative flex items-center gap-3 rounded-2xl border
                       border-neutral-900 dark:border-neutral-800 bg-neutral-950 dark:bg-zinc-900
                       px-5 py-3.5 w-full sm:w-auto sm:max-w-[280px] transition-all duration-200 ease-out cursor-default
                       [box-shadow:4px_4px_0px_rgba(249,115,22,0.35)]
                       hover:[box-shadow:6px_6px_0px_rgba(249,115,22,0.6)]
                       hover:-translate-y-1 hover:-translate-x-0.5"
                :style="{ animationDelay: `${(gIndex * 90) + (index * 60)}ms` }"
              >
                <i :class="skill.icon" class="shrink-0 text-xl text-orange-500 transition-transform
                 duration-200 group-hover:scale-110 group-hover:rotate-6"></i>
                <span class="text-sm sm:text-base font-bold text-neutral-50 tracking-wide leading-snug break-words">
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>
  
        </div>
      </section>
  
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  
  const skills = ref([
    { name: 'Frontend Com HTML,CSS e Javascript - DIO', icon: 'pi pi-desktop', category: 'Frontend' },
    { name: 'Backend em Django - CEPEDI', icon: 'pi pi-server', category: 'Backend' },
    { name: 'Backend em FastAPI - CEPEDI', icon: 'pi pi-bolt', category: 'Backend' },
    { name: 'Curso Linguagem de Progamação Python - Fundação Bradesco', icon: 'pi pi-code', category: 'Backend' },
    { name: 'PostgreSQL - Udemy', icon: 'pi pi-database', category: 'Dados & Infra' },
    { name: 'Docker - Udemy', icon: 'pi pi-box', category: 'Dados & Infra' },
    { name: 'N8N - Documentação', icon: 'pi pi-share-alt', category: 'Dados & Infra' },
    { name: 'Git - DIO', icon: 'pi pi-arrow-right-arrow-left', category: 'Ferramentas & Processo' },
    { name: 'Scrum - CEPEDI', icon: 'pi pi-users', category: 'Ferramentas & Processo' },
    { name: 'PowerBI - UDEMY', icon: 'pi pi-chart-bar', category: 'Ferramentas & Processo' },
    { name: 'Excel - Instituto Mix', icon: 'pi pi-table', category: 'Ferramentas & Processo' },
  ]);
  
  // agrupa mantendo a ordem de primeira aparição da categoria
  const groupedSkills = computed(() => {
    const order = [];
    const map = new Map();
  
    skills.value.forEach((skill) => {
      if (!map.has(skill.category)) {
        map.set(skill.category, []);
        order.push(skill.category);
      }
      map.get(skill.category).push(skill);
    });
  
    return order.map((category) => ({ category, items: map.get(category) }));
  });
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