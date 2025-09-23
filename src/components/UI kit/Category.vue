<template>
    <div
    class="category-card"
    :style="{ backgroundColor: `${color}40` }"
    >
    {{ title }}
    </div>

</template>

<script setup lang="ts">
defineProps<{
  color: string
  title: string
}>()
</script>

<style scoped>
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 1rem;
  transition: transform 0.2s ease;
  cursor: pointer;
}
.category-card:hover {
  transform: translateY(-4px);
}
.icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 0.75rem;
}
</style>
