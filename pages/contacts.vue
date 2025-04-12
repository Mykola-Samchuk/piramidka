<template>
  <div>
    <main class="main">
      <div class="container">
        <h1 class="page-title">Контакти</h1>
        <p class="text">Зв'яжіться з нами, і ми відповімо на всі ваші запитання.</p>
        
        <div class="contacts-wrapper">
          <div class="contacts-info">
            <div class="contact-item">
              <h3>Адреса</h3>
              <p>м. Київ, вул. Хрещатик, 1</p>
            </div>
            
            <div class="contact-item">
              <h3>Телефон</h3>
              <p><a href="tel:+380985957277">+38 (098) 595 72 77</a></p>
            </div>
            
            <div class="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
            
            <div class="contact-item">
              <h3>Режим роботи</h3>
              <p>Пн-Пт: 9:00-21:00<br>Сб-Нд: 10:00-18:00</p>
            </div>
          </div>
          
          <div class="contact-map">
            <!-- Тут буде карта -->
            <div class="map-placeholder bg-gray-200"></div>
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

.contacts-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacer-4;
  
  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
  }
}

.contacts-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacer-3;
  
  @media (max-width: $mobile) {
    grid-template-columns: 1fr;
  }
}

.contact-item {
  h3 {
    font-size: $font-size-lg;
    margin-bottom: $spacer-2;
    color: $primary;
  }
  
  p {
    color: $text-secondary;
  }
  
  a {
    color: $text-secondary;
    text-decoration: none;
    
    &:hover {
      color: $primary;
    }
  }
}

.contact-map {
  .map-placeholder {
    width: 100%;
    height: 100%;
    min-height: 300px;
    border-radius: $border-radius;
  }
}
</style> 