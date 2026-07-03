<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppHero from '@/components/AppHero.vue'
import { onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import AppProjects from '@/components/AppProjects.vue';
import AppExperience from '@/components/AppExperience.vue';
import AppAboutMe from '@/components/AppAboutMe.vue';


const toast = useToast();

const show = () => {
  toast.add({ 
    severity: 'success', 
    summary: 'Bem Vindo!!', 
    detail: 'Espero que goste dos Projetos!!!', 
    life: 3000 
  });
};

onMounted(() => {

  setTimeout(() => {
    show();
  }, 100);
});
</script>

<template>
  <div class="flex flex-col w-full min-h-screen overflow-x-hidden relative">
    <!-- Se sua div background quebrar, o relative e o overflow do pai vão neutralizar ela -->
    <div class="background"></div>
    
    <AppNavbar />
    <AppHero />
    <AppAboutMe />
    <AppProjects />
    <AppExperience />
    <AppSkills />
    <AppCourse />
    <AppContact />
    <AppFooter />
  </div>
</template>