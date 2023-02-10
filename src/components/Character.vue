<script setup>
import { computed } from "@vue/runtime-core"

const props = defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})

const bgColor = computed(() => {
  if (props.info.status === 'Alive') return 'var(--color-positive)'
  return props.info.status === 'Dead' ? 'var(--color-negative)' : 'var(--color-neutral)'
})
</script>

<template>
  <div class="character">
    <img
      class="character__image"
      :src="info.image" 
      :alt="info.name"
    >
    <div class="character__description">
      <h2 v-text="info.name" />
      <div class="character__status">
        <span 
          class="character__status-dot" 
          :style="{ backgroundColor: bgColor }"
        />
        <p class="character__status-info">
          <span v-text="info.status" />
          <span v-text="' - '" />
          <span v-text="info.species" />
        </p>
      </div>
      <p 
        class="character__label"
        v-text="'Last known location:'" 
      />
      <a
        :href="info.location.url" 
        target="_blank"
        v-text="info.location.name"
      />
      <p 
        class="character__label"
        v-text="'First seen in:'" 
      />
      <a
        :href="info.episode.url" 
        target="_blank"
        v-text="info.episode.name"
      />
    </div>
  </div>
</template>

<style>
.character {
  background-color: var(--color-bg-secondary);
  border-radius: var(--size-base);
  border: 1px solid var(--color-neutral);
  overflow: hidden;
}

.character__image {
  display: block;
  margin: 0;
  width: 100%;
  height: auto;
}

.character__description {
  padding: var(--size-base-x-2);
}

.character__status {
  display: flex;
  align-items: center;
}

.character__status-dot {
  display: block;
  width: 9px;
  height: 9px;
  margin-right: var(--size-base);
  border-radius: 100%;
}

.character__status-info {
  font-size: var(--font-size-m);
}

.character__label {
  margin-top: var(--size-base-x-2);
  font-size: var(--font-size-xs);
  color: var(--color-txt-secondary)
}

@media (min-width: 768px) {
  .character {
    display: flex;
  }
  .character__image {
    width: var(--max-width-xs);
    height: 100%;
  }
}
</style>