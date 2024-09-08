<script setup lang="ts">
import { reactive } from 'vue';
import { Category, ITask, Priority } from '../../types/index';
import wrapperUI from '../wrapperUI.vue';
import defaultButton from '../defaultButton.vue';

const input: ITask = reactive({
  name: '',
  category: Category.Personal,
  priority: Priority.High,
  date: new Date(),
  isDone: false
})
</script>

<template>
   <wrapperUI>
      <p class="bg-white text-lime-700 p-2">WASSUP!</p>
      <div class="max-w-7xl w-full flex flex-col items-center gap-4">
        <input v-model="input.name" type="text" class="w-full p-2 bg-white border border-lime-900" placeholder="task name:">
        <label for="category" class="text-white font-medium">Select category</label>
        <select v-model="input.category" id="category" class="w-full p-2 bg-white border border-lime-900">
          <option v-for="(category, index) in Category" :key="index" :value="category">{{ category }}</option>
        </select>
        <label for="priority" class="text-white font-medium">Select priority</label>
        <select v-model="input.priority" id="priority" class="w-full p-2 bg-white border border-lime-900">
          <option v-for="(item, index) in Priority" :key="index" :value="item">{{ item }}</option>
        </select>
        <input v-model="input.date" type="datetime-local" name="date" id="date">
        <defaultButton @click="$emit('addTask', input)">Done</defaultButton>
        <defaultButton @click="$emit('closeModal')">Back</defaultButton>
      </div>
    </wrapperUI>
</template>