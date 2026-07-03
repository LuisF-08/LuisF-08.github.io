<template>
  <div class="w-full flex flex-col items-center justify-center gap-8 py-12">

    <a href="#projects" class="group relative h-14 flex items-center justify-center overflow-hidden rounded-full bg-neutral-950 dark:bg-zinc-900 px-10 text-neutral-50 
    shadow-lg shadow-orange-500/50 transition-transform duration-300 active:scale-95 cursor-pointer">
      <span class="relative z-10 text-xl font-bold tracking-wider transition-colors duration-500 group-hover:text-white flex items-center gap-2">
        <i class="pi pi-folder"></i>
        PROJETOS 
      </span>
      <span class="absolute inset-0 overflow-hidden rounded-full">
        <span class="absolute top-1/2 left-0 aspect-square w-full -translate-y-1/2 -translate-x-full rounded-full bg-orange-500 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:scale-150"></span>
      </span>
    </a> 

    <!-- Seção Sobre Mim -->
    <section id="about" class="w-full max-w-6xl mt-24 px-4">
      <div class="text-center mb-20">
        <h2 class="inline-block text-5xl sm:text-6xl font-extrabold text-neutral-950 dark:text-neutral-50 tracking-wide relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-transparent">
          SOBRE MIM
        </h2>
      </div>

      <!-- Container do Chat com efeito de sombra deslocada para a esquerda -->
      <div class="flex flex-col h-[500px] w-full max-w-6xl border border-neutral-200 dark:border-neutral-700 rounded-lg bg-surface-50 [box-shadow:-8px_8px_0px_rgb(82_82_82)]">

        <!-- Topo do Chat -->
        <div class="p-4 border-b border-surface-200 rounded-lg flex items-center gap-3 bg-black dark:bg-white">
          <Avatar
            icon="pi pi-user"
            shape="circle"
            class="mr-2 shrink-0"
            style="background-color: #e65d1e; color: #fff; width: 2.5rem; height: 2.5rem;"
          />
          <span class="font-bold text-orange-500">Luís Dev</span>
        </div>

        <!-- Corpo do Chat (Onde a mágica acontece) -->
        <ScrollPanel class="flex-1 p-4 h-[350px]">
          <div class="flex flex-col gap-6">

            <!-- Mensagem de Outra Pessoa -->
            <div class="flex items-end gap-2 max-w-[80%]">
              <Avatar
                icon="pi pi-user"
                shape="circle"
                class="mr-2 shrink-0"
                style="background-color: #e65d1e; color: #fff; width: 2.5rem; height: 2.5rem;"
              />
              <div class="p-4 font-bold bg-orange-500 rounded-2xl rounded-bl-none text-xl">
                Olá,me chamo Luís! sou um alguém apaixonado por tecnologia, gosto de Desenvolver aplicações
                e soluções inteligentes, desde Landing pages até automações de escritórios e análises de dados,
                está precisando de alguma solução inteligente? me mande mensagem para conversamos sobre!
              </div>
            </div>

            <!-- Sua Mensagem (Alinhada à direita) -->
            <div class="flex items-end gap-2 max-w-[80%] self-end justify-end">
              <div class="font-bold p-3 bg-orange-500 rounded-2xl rounded-br-none text-xl">
                Olá, gostaria que realiza-se um serviço para mim
              </div>
            </div>

          </div>
        </ScrollPanel>

        <!-- Barra de Digitação -->
        <div class="p-3 font-bold bg-white border-t border-surface-200">
          <InputGroup>
            <InputText
              v-model="newMessage"
              placeholder="Digite sua mensagem..."
              @keyup.enter="sendMessage"
            />
            <Button icon="pi pi-send" severity="warn" @click="sendMessage" />
          </InputGroup>
        </div>

      </div>

    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const newMessage = ref('')
const sendMessage = () => {
  if (newMessage.value.trim() === '') return

  console.log('Mensagem enviada:', newMessage.value)
  newMessage.value = ''
}
</script>