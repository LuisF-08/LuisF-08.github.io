<template>
  <div class="w-full flex flex-col items-center justify-center gap-8 py-12 px-4 sm:px-6">

    <!-- Seção Projetos -->
    <section id="projects" class="w-full max-w-6xl mt-12">

      <h2 class="relative text-5xl sm:text-7xl  font-black text-center mb-20">
        <!-- Texto com Gradiente e Brilho -->
        <span class="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
          PROJETOS
        </span>
        <!-- Linha Decorativa com Desvanecimento (Fade) -->
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 sm:w-48 h-1.5 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80"></div>
      </h2>   

      <!-- PROJETOS -->
      <div class="flex flex-col gap-12">
        <div
          v-for="projeto in projetos"
          :key="projeto.id"
          class="group flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900
                 transition-all duration-300 hover:-translate-y-1 hover:border-orange-600 shadow-lg
                 hover:shadow-orange-500/20 dark:hover:shadow-orange-500/40"
        >
          <!-- Coluna da imagem -->
          <div class="w-full lg:w-1/2 flex flex-col bg-zinc-900">
            <!-- Barra de título estilo editor -->
            <div class="flex items-center gap-2 border-b border-zinc-700 bg-zinc-800 px-4 py-3 shrink-0">
              <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f56]"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#27c93f]"></span>
              <span class="ml-2 truncate font-mono text-xs text-zinc-400">
                {{ projeto.nome.toLowerCase().replace(/\s+/g, '-') }}.py
              </span>
            </div>

            <!-- Imagem com proporção controlada -->
            <div class="w-full h-64 sm:h-80 lg:h-full min-h-[280px] lg:min-h-[380px] relative overflow-hidden">
              <img
                :src="getImagem(projeto.imagem)"
                :alt="projeto.nome"
                class="absolute inset-0 w-full h-full object-cover border-b lg:border-b-0 lg:border-r border-zinc-700 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <!-- Coluna do conteúdo -->
          <div class="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-8 bg-zinc-950">
            <div class="flex flex-col gap-4">
              <p class="text-xl sm:text-2xl font-bold text-zinc-100">{{ projeto.nome }}</p>
              <p class="text-sm sm:text-base leading-relaxed text-zinc-400">{{ projeto.descricao }}</p>
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="f in projeto.ferramentas"
                :key="f"
                class="rounded border border-orange-400/25 bg-orange-400/10 px-2.5 py-1
                       font-mono text-xs text-orange-400 whitespace-nowrap"
              >
                {{ f }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const imagens = import.meta.glob('../assets/images/*.{png,jpg,jpeg}', { eager: true, import: 'default' })

function getImagem(nomeArquivo) {
  const entrada = Object.entries(imagens).find(([caminho]) => caminho.endsWith(nomeArquivo))
  return entrada ? entrada[1] : ''
}

const projetos = ref([
  {
    id: 1,
    imagem: 'projeto-agro.jpeg',
    nome: 'App Web com Análise de dados e Automação com agente de IA',
    descricao: 'Aplicação web com análise geográficas, estatísticas e otimizadas de uma empresa rural fictícia, com modelo de regressão linear para previsão de vendas e com chatbot para auxílio nas análises.',
    ferramentas: ['Python', 'Pandas', 'n8n', 'PowerBI', 'SQL', 'Excel'],
  },
  {
    id: 2,
    imagem: 'projeto-analise.jpeg',
    nome: 'Dashboard de RH para empresas',
    descricao: 'Dashboard com KPIs e informações extraídas para servir de base para tomadas de decisões estratégicas.',
    ferramentas: ['PowerBI', 'SQL', 'Excel', 'Linguagem R'],
  },
  {
    id: 3,
    imagem: 'projeto-django.png',
    nome: 'Gerenciador de Atividade Diárias Web',
    descricao: 'Gerenciador de Tarefas web com busca, exclusão, criação e alteração de campos e com notificação de tarefas mais prioritárias.',
    ferramentas: ['Python', 'Django', 'Bootstrap', 'PostgreSQL', 'HTML5', 'CSS3', 'Django Rest Framework'],
  },
  {
    id: 4,
    imagem: 'auto_resumo_emails.png',
    nome: ' Automação de Envio de Resumo',
    descricao: 'Automação feita no n8n para envio de resumo de todos os emails diárias, com filtragem de prioridade, sendo cutomizavel seu layout de envio',
    ferramentas: ['N8N','Javascript','Gemini API','Gmail API', "HTML", 'CSS'],
  },
  {
    id: 5,
    imagem: 'auto_busca_empresas.png',
    nome: ' Automação de Busca de Empresas próximas',
    descricao: 'Automação feita no n8n para busca de empresas por localidade me até 20km,com especificação do comercio, local, nome e demais informações das empresas',
    ferramentas: ['N8N','Javascript','Overpass API', "HTML", 'CSS'],
  },
  {
    id: 6,
    imagem: 'tela-cepedi.jpeg',
    nome: 'Sistema de alocação de Aulas para Professores',
    descricao: 'Sistemas feito em Conjunto com 8 integrantes para a Fase 2 do CAPACITA CEPEDI, Serve de Apoio a professores para alocação de aulas ',
    ferramentas:['Python', 'Django', 'Bootstrap', 'PostgreSQL', 'HTML5', 'CSS3', 'Django Rest Framework', 'Figma', 'UI/UX'],
  },
])
</script>