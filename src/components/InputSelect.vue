<script setup>
import { computed } from "@vue/runtime-core"

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:model-value'])

const selectedOption = props.modelValue
const onChangeFilter = data => emit('update:model-value', data.target.value)
</script>

<template>
  <div class="input-select">
    <label 
      class="input-select__label"
      v-text="label" 
    />
    <select 
      v-model="selectedOption"
      class="input-select__select"
      @change="onChangeFilter($event)"
    >
      <option
        v-for="option in options"
        :key="option === 'clear' ? '' : option"
        :value="option === 'clear' ? '' : option"
        v-text="option === 'clear' ? 'sin selección' : option"
      />
    </select>
  </div>
</template>

<style>
.input-select {
  display: flex;
  flex-direction: column;
}

.input-select__label {
  margin-bottom: var(--size-base);
  font-size: var(--font-size-m);
  color: var(--color-txt-secondary)
}

.input-select__select {
  width: 100%;
  padding: var(--size-base);
  border: 0;
  border-radius: var(--size-base);
}
</style>