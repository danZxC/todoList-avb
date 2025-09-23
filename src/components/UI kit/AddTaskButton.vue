<!-- src/components/FabPlus.vue -->
<template>
  <button class="fab">
    <svg
      viewBox="0 0 24 24"
      width="60%"
      height="60%"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.2"
      />
    </svg>
  </button>
</template>

<style scoped lang="scss">
.fab {
  display: inline-grid;
  place-items: center;
  border: none;
  border-radius: 50%; /* круг */
  cursor: pointer;
  background-color: #2c3e50;
  color: #fff; /* цвет плюса */
  width: 64px;
  height: 64px;
  transition: background-color 0.3s, color 0.3s;

  svg {
    display: block;
  }
}

/* Hover */
.fab:hover {
  background-color: #2980b9;
  color: white;
}
</style>
