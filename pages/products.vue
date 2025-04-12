<template>
  <div>
    <main class="main">
      <div class="container">
        <h1 class="page-title">Продукція</h1>
        <p class="text">Наша продукція відповідає найвищим стандартам якості та ефективності.</p>
        <div class="products-grid">
          <div class="product-card">
            <div class="product-image bg-gray-200"></div>
            <h3>Товар 1</h3>
            <p>Опис товару та його характеристики</p>
          </div>
          <div class="product-card">
            <div class="product-image bg-gray-200"></div>
            <h3>Товар 2</h3>
            <p>Опис товару та його характеристики</p>
          </div>
          <div class="product-card">
            <div class="product-image bg-gray-200"></div>
            <h3>Товар 3</h3>
            <p>Опис товару та його характеристики</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacer-4;
}

.product-card {
  padding: $spacer-3;
  border: 1px solid $gray-300;
  border-radius: $border-radius;
  
  h3 {
    margin: $spacer-2 0;
    font-size: $font-size-lg;
  }
  
  p {
    color: $text-secondary;
  }
}

.product-image {
  height: 180px;
  border-radius: $border-radius-sm;
}
</style> 