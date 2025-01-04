<template>
  <div>
    <b-header/>
    <main>
      <slot/>
    </main>
    <b-footer/>
  </div>
</template>
<script setup >
import BHeader from "~/component/general/b-header.vue";
import BFooter from "~/component/general/b-footer.vue";
</script>