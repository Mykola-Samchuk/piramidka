<template>
  <div>
    <BHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import BHeader from "@/component/general/b-header.vue";
// Поки що відключаємо BFooter, оскільки він, можливо, не існує
// import BFooter from "@/component/general/b-footer.vue";
</script>