<template>
  <div>
    <main class="main">
      <div class="container">
        <h1 class="page-title">Про нас</h1>
        <p class="text">Ми компанія, яка спеціалізується на енергозберігаючих технологіях.</p>
        <div class="about-content">
          <h2>Наша історія</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
             Cras feugiat mattis dolor, eget pellentesque enim bibendum nec.</p>
          
          <h2>Наша місія</h2>
          <p>Donec at nisi eu eros tempor molestie. Morbi iaculis, nunc et pretium faucibus, 
             nunc ex tempus justo, vel porttitor nulla mauris quis neque.</p>
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

.about-content {
  h2 {
    font-size: $font-size-xl;
    margin-top: $spacer-4;
    margin-bottom: $spacer-2;
  }
  
  p {
    margin-bottom: $spacer-3;
  }
}
</style> 