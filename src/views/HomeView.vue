<script setup>
import { computed } from 'vue'
import { getCharacters, filterCharacters } from '@/models/characters'
import { getSessionStorage } from '@/helpers/storage'
import character from '@/components/Character.vue'
import inputSelect from '@/components/InputSelect.vue'

const characters = computed(getCharacters)
const storageFilter = getSessionStorage('filters') || {}

const formData = {
  status: storageFilter.status || '',
  gender: storageFilter.gender || ''
}

const statusFilters = ['clear', 'alive', 'dead', 'unknown']
const gendersFilters = ['clear', 'female', 'male', 'genderless', 'unknown']

const onChangeFilter = (key, value) => {
  formData[key] = value
  filterCharacters(formData)
}

</script>

<template>
  <div class="home">
    <div class="home__filters">
      <input-select 
        :model-value="formData.status"
        label="Status"
        :options="statusFilters"
        @update:model-value="value => onChangeFilter('status', value)"
      />
      <input-select 
        :model-value="formData.gender"
        label="Gender"
        :options="gendersFilters"
        @update:model-value="value => onChangeFilter('gender', value)"
      />
    </div>
    <div class="home__grid">
      <character
        v-for="(character, index) in characters"
        :key="index"
        :info="character"
      />
    </div>
  </div>
</template>

<style>
.home {
  max-width: var(--max-width-lg);
  margin: 0 auto;
  padding: var(--size-base-x-3)
}

.home__filters {
  display: grid;
  gap: var(--size-base);
  margin-bottom: var(--size-base-x-2);
}

.home__grid {
    display: grid;
    gap: var(--size-base-x-2);
  }

@media (min-width: 768px) {
  .home__grid {
    grid-template-columns: repeat(auto-fill, minmax(var(--max-width-sm), 1fr));
  }

  .home__filters {
    grid-template-columns: repeat(2, var(--max-width-xs));
  }
}
</style>
