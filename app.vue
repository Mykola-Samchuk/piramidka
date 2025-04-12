<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Підтвердження, що це клієнтський додаток
const isClient = ref(false);
onMounted(() => {
  isClient.value = true;
});
</script>

<style>
/* Підключення шрифтів з Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700&display=swap');

/* Базові стилі для SPA */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style> 