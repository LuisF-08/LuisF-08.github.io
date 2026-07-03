<template>
  <div class="w-full flex flex-col items-center justify-center px-4 sm:px-6 pt-30">

    <div class="relative w-full max-w-5xl mx-auto my-20 flex items-center justify-center">
      <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800
       dark:via-neutral-300 to-transparent"></div>
      
      <div class="absolute flex items-center justify-center">
        <div class="w-6 h-6 rotate-15 border border-orange-500 bg-white dark:bg-neutral-950 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
      </div>
    </div>

    <div class="text-center mb-16 sm:mb-20 px-2">
      <div class="relative inline-block max-w-full">
        <div class="absolute -inset-2 -z-10 bg-orange-500/20 dark:bg-orange-400/30 blur-xl rounded-2xl pointer-events-none"></div>
        <h2 class="relative inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-3
                   text-2xl xs:text-3xl sm:text-5xl whitespace-nowrap
                   font-extrabold tracking-wide rounded-xl border cursor-default select-none transition-colors duration-300
                   border-neutral-900 bg-white/80 text-neutral-900 
                   [box-shadow:4px_4px_0px_rgba(23,23,23,1)] sm:[box-shadow:6px_6px_0px_rgba(23,23,23,1)]
                   dark:border-neutral-100 dark:bg-neutral-900/80 dark:text-neutral-50 
                   dark:[box-shadow:4px_4px_0px_rgba(245,245,245,1)] dark:sm:[box-shadow:6px_6px_0px_rgba(245,245,245,1)]">
          HABILIDADES
        </h2>
      </div>
    </div>

    <section id="skills" class="w-full overflow-hidden mt-4 py-10">
      
      <Flicking 
        :options="{ 
          align: 'center', 
          circular: skills.length > 6, 
          moveType: 'freeScroll', 
          duration: 500,
          bound: skills.length <= 6
        }"
        :plugins="plugins"
        class="w-full py-6"
      >
        <div 
          v-for="(skill, index) in skills" 
          :key="index" 
          class="flicking-panel w-[140px] sm:w-[220px] mx-2 sm:mx-3"
        >
          <div class="group relative flex flex-col items-center justify-center rounded-3xl sm:rounded-4xl border
           border-neutral-900 dark:border-neutral-800 bg-neutral-950 dark:bg-zinc-900 p-4 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-500/30 text-center h-32 sm:h-40">

            <div class="mb-3 sm:mb-4 text-3xl sm:text-4xl text-orange-500 transition-transform duration-300 group-hover:scale-110">
              <i :class="skill.icon"></i>
            </div>

            <span class="text-xs sm:text-base font-bold text-neutral-50 tracking-wide">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </Flicking>

    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Flicking from '@egjs/vue3-flicking';
import '@egjs/vue3-flicking/dist/flicking.css';
import '@egjs/vue3-flicking/dist/flicking-inline.css';
import { AutoPlay } from '@egjs/flicking-plugins';

const plugins = [
  new AutoPlay({ 
    duration: 3000,               
    direction: 'NEXT',            
    stopOnHover: true            
  })
];

const skills = ref([
  { name: 'Vue.js', icon: 'pi pi-desktop' },
  { name: 'Django', icon: 'pi pi-server' },
  { name: 'FastAPI', icon: 'pi pi-bolt'},
  { name: 'Python', icon: 'pi pi-code' },
  { name: 'PostgreSQL', icon: 'pi pi-database' },
  { name: 'Docker', icon: 'pi pi-box' },
  { name: 'Scrum', icon: 'pi pi-users' },
  { name: 'N8N', icon:'pi pi-share-alt'},
  { name: 'Git', icon:'pi pi-arrow-right-arrow-left'},
  { name: 'PoweBI', icon:'pi pi-chart-bar'},
  { name: 'Excel', icon:'pi pi-table'},
]);
</script>