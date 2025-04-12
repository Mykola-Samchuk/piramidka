<template>
  <div>
    <main class="main">
      <div class="container">
        <h1 class="heading-1">UI Kit</h1>
        
        <section class="section">
          <h2 class="heading-2">Кольори</h2>
          <div class="color-samples">
            <div class="color-sample bg-dark">
              <span class="color-name text-light">Dark Blue</span>
              <span class="color-code text-light">#001737</span>
            </div>
            <div class="color-sample bg-primary">
              <span class="color-name text-light">Primary</span>
              <span class="color-code text-light">#0240CF</span>
            </div>
            <div class="color-sample bg-success">
              <span class="color-name text-dark">Success</span>
              <span class="color-code text-dark">#54FF8A</span>
            </div>
            <div class="color-sample bg-success-light">
              <span class="color-name text-dark">Success Light</span>
              <span class="color-code text-dark">#90FFB3</span>
            </div>
            <div class="color-sample bg-white">
              <span class="color-name text-dark">White</span>
              <span class="color-code text-dark">#FFFFFF</span>
            </div>
          </div>
        </section>
        
        <section class="section">
          <h2 class="heading-2">Типографіка</h2>
          
          <div class="type-sample">
            <h1 class="heading-1">Заголовок 1 (Unbounded)</h1>
            <h2 class="heading-2">Заголовок 2 (Unbounded)</h2>
            <h3 class="heading-3">Заголовок 3 (Unbounded)</h3>
            <h4 class="heading-4">Заголовок 4 (Unbounded)</h4>
            
            <p class="font-normal mb-2">Звичайний текст (Regular 400) - Inter</p>
            <p class="font-medium mb-2">Середній текст (Medium 500) - Inter</p>
            <p class="font-semibold mb-2">Напівжирний текст (Semibold 600) - Inter</p>
            <p class="font-bold mb-4">Жирний текст (Bold 700) - Inter</p>
          </div>
        </section>
        
        <section class="section">
          <h2 class="heading-2">Кнопки</h2>
          
          <div class="button-groups-container">
            <!-- Первинні кнопки -->
            <div class="button-states">
              <div class="state-column">
                <h3 class="state-title">Default</h3>
                <button class="btn btn-primary mb-3">Кнопка</button>
                <button class="btn btn-outline">Кнопка</button>
              </div>
              
              <div class="state-column">
                <h3 class="state-title">Hover</h3>
                <button class="btn btn-primary mb-3 demo-hover">Кнопка</button>
                <button class="btn btn-outline demo-hover">Кнопка</button>
              </div>
              
              <div class="state-column">
                <h3 class="state-title">Pressed</h3>
                <button class="btn btn-primary mb-3 demo-pressed">Кнопка</button>
                <button class="btn btn-outline demo-pressed">Кнопка</button>
              </div>
              
              <div class="state-column">
                <h3 class="state-title">Disabled</h3>
                <button class="btn btn-primary mb-3" disabled>Кнопка</button>
                <button class="btn btn-outline" disabled>Кнопка</button>
              </div>
            </div>
            
            <h3 class="heading-3 mt-5">Розміри</h3>
            <div class="buttons-row">
              <button class="btn btn-primary btn-sm mr-2">Маленька</button>
              <button class="btn btn-primary mr-2">Стандартна</button>
              <button class="btn btn-primary btn-lg">Велика</button>
            </div>
          </div>
        </section>
        
        <section class="section">
          <h2 class="heading-2">Форми</h2>
          
          <div class="form-group mb-3">
            <label for="name" class="form-label">Ім'я</label>
            <input type="text" id="name" class="form-control" placeholder="Введіть ім'я">
          </div>
          
          <div class="form-group mb-3">
            <label for="disabled" class="form-label">Неактивне поле</label>
            <input type="text" id="disabled" class="form-control" placeholder="Неактивне поле" disabled>
          </div>
          
          <div class="form-group mb-3">
            <label for="invalid" class="form-label">Поле з помилкою</label>
            <input type="text" id="invalid" class="form-control is-invalid" placeholder="Поле з помилкою">
            <div class="invalid-feedback">Це поле має помилку</div>
          </div>
          
          <div class="form-group mb-3">
            <label for="select" class="form-label">Випадаючий список</label>
            <div class="select-control">
              <select id="select" class="form-select">
                <option value="">Оберіть варіант</option>
                <option value="1">Варіант 1</option>
                <option value="2">Варіант 2</option>
                <option value="3">Варіант 3</option>
              </select>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding: $spacer-5 0;
}

.section {
  margin-bottom: $spacer-5;
}

.color-samples {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: $spacer-3;
  margin-top: $spacer-3;
}

.color-sample {
  height: 100px;
  border-radius: $border-radius;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: $shadow-sm;
}

.color-name {
  font-weight: $font-weight-semibold;
  margin-bottom: $spacer-1;
}

.type-sample {
  margin-top: $spacer-3;
  
  h1, h2, h3, h4 {
    margin-bottom: $spacer-2;
  }
}

.button-groups-container {
  margin-top: $spacer-3;
}

.button-states {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacer-4;
  margin-bottom: $spacer-4;
  
  @media (max-width: $tablet) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: $mobile) {
    grid-template-columns: 1fr;
  }
}

.state-column {
  display: flex;
  flex-direction: column;
}

.state-title {
  margin-bottom: $spacer-3;
  font-size: 1.2rem;
  font-weight: $font-weight-medium;
}

.buttons-row {
  display: flex;
  flex-wrap: wrap;
  gap: $spacer-2;
  margin-top: $spacer-2;
}

.form-group {
  max-width: 400px;
}

.form-label {
  display: block;
  margin-bottom: $spacer-1;
  font-weight: $font-weight-medium;
}

.invalid-feedback {
  margin-top: $spacer-1;
  color: $error;
  font-size: $font-size-sm;
}

.mr-2 {
  margin-right: $spacer-2;
}

.mb-3 {
  margin-bottom: $spacer-3;
}

.mt-5 {
  margin-top: $spacer-5;
}

// Демонстраційні класи для емуляції hover і pressed станів
// .demo-hover {
//   &.btn-primary {
//     background-color: transparent;
//     color: $primary;
//     border-color: $primary;
//   }
  
//   &.btn-outline {
//     background-color: transparent;
//     color: $primary;
//     border-color: $primary;
//   }
// }

// .demo-pressed {
//   &.btn-primary {
//     background-color: $button-pressed;
//   }
  
//   &.btn-outline {
//     background-color: transparent;
//     color: $button-pressed;
//     border-color: $button-pressed;
//   }
// }
</style> 