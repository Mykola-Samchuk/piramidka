<template>
  <div>
    <main class="main">
      <div class="container">
        <h1 class="page-title">Головна сторінка</h1>
        <p class="text">Ласкаво просимо до нашого сайту!</p>
        <div class="style-demo">
          <h2>Демонстрація стилів</h2>
          <div class="colors">
            <div class="color-block bg-primary">Primary</div>
            <div class="color-block bg-secondary">Secondary</div>
            <div class="color-block text-light bg-danger">Danger</div>
            <div class="color-block text-light bg-success">Success</div>
          </div>
          <div class="typography">
            <p class="font-normal">Font Normal (400)</p>
            <p class="font-medium">Font Medium (500)</p>
            <p class="font-semibold">Font Semibold (600)</p>
            <p class="font-bold">Font Bold (700)</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// BHeader тепер у лейауті
</script>

<style lang="scss" scoped>
.main {
  padding: $spacer-4 0;
}

.page-title {
  font-size: $font-size-2xl;
  margin-bottom: $spacer-3;
}

.text {
  margin-bottom: $spacer-4;
}

.style-demo {
  margin-top: $spacer-5;
  padding: $spacer-3;
  border: 1px solid $gray-300;
  border-radius: $border-radius;
  
  h2 {
    margin-bottom: $spacer-3;
    font-size: $font-size-xl;
  }
}

.colors {
  display: flex;
  gap: $spacer-2;
  margin-bottom: $spacer-4;
  
  .color-block {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $border-radius-sm;
    color: $text-primary;
  }
}

.typography {
  p {
    margin-bottom: $spacer-2;
  }
}
</style>