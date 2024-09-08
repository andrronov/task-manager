<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { ITask } from './types/index';
import defaultButton from './components/defaultButton.vue';
import wrapperUI from './components/wrapperUI.vue';
import defModal from './components/UI/defModal.vue';

const tasks: Ref<ITask[]> = ref([])
const isModal: Ref<Boolean> = ref(false)

function addTask(task: ITask){
  tasks.value.push(task)
  isModal.value = false
}
</script>

<template>
  <defModal v-if="isModal" @close-modal="isModal = false" @add-task="addTask" />

  <wrapperUI v-else>
    <p class="bg-white text-lime-700 p-2">WASSUP!</p>
      <table v-if="tasks.length > 0" class="w-full text-white">
        <thead>
          <tr>
            <th class="text-xl text-center w-1/4 font-bold">Название</th>
            <th class="text-xl text-center w-1/4 font-bold">Приоритет</th>
            <th class="text-xl text-center w-1/4 font-bold">Категория</th>
            <th class="text-xl text-center w-1/4 font-bold">Дата</th>
            <th class="text-xl text-center w-1/4 font-bold">Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index" class="border-2 border-white" :class="task.isDone ? 'bg-black/35' : ''">
            <td class="text-xl text-center w-1/4 font-bold">{{ task.name }}</td>
            <td class="text-xl text-center w-1/4 font-bold">{{ task.priority }}</td>
            <td class="text-xl text-center w-1/4 font-bold">{{ task.category }}</td>
            <td class="text-xl text-center w-1/4 font-bold">{{ task.date }}</td>
            <td class="flex flex-row items-center gap-4">
              <input v-model="task.isDone" type="checkbox" class="w-8 h-8" />
              <defaultButton @click="tasks = tasks.filter(t => t !== task)">Delete</defaultButton>
            </td>
          </tr>
        </tbody>
      </table>
    <defaultButton class="p-3" @click="isModal = true">Add task</defaultButton>
  </wrapperUI>
</template>

<style scoped>
</style>
