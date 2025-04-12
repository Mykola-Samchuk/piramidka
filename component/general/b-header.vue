<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <a href="/" class="header__logo">
          <!-- <img src="/images/logo.svg" alt="SPAS Energy" width="247" height="40"> -->
        </a>
        
        <div class="header__contact">
          <a href="tel:+380985957277" class="header__phone">+38 (098) 595 72 77</a>
          <span class="header__hours">Режим роботи (9:00-21:00)</span>
        </div>

        <nav class="header__nav">
          <ul class="header__menu">
            <li><a href="/" class="header__menu-link">Головна</a></li>
            <li><a href="/products" class="header__menu-link">Продукція</a></li>
            <li><a href="/about" class="header__menu-link">Про нас</a></li>
            <li><a href="/contacts" class="header__menu-link">Контакти</a></li>
          </ul>
        </nav>

        <button class="header__button">Написати нам</button>
        
        <button class="header__menu-btn" @click="toggleMenu">
          Меню
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <div class="mobile-menu__header">
        <button class="mobile-menu__close" @click="toggleMenu">×</button>
      </div>
      
      <nav class="mobile-menu__nav">
        <ul class="mobile-menu__list">
          <li><a href="/" class="mobile-menu__link">Головна</a></li>
          <li><a href="/products" class="mobile-menu__link">Продукція</a></li>
          <li><a href="/about" class="mobile-menu__link">Про нас</a></li>
          <li><a href="/contacts" class="mobile-menu__link">Контакти</a></li>
        </ul>
      </nav>

      <div class="mobile-menu__footer">
        <button class="mobile-menu__button">Написати нам</button>
        <a href="tel:+380985957277" class="mobile-menu__phone">+38 (098) 595 72 77</a>
        <div class="mobile-menu__social">
          <a href="#" class="mobile-menu__social-link">
            <!-- <img src="/images/social/telegram.svg" alt="Telegram"> -->
          </a>
          <a href="#" class="mobile-menu__social-link">
            <!-- <img src="/images/social/whatsapp.svg" alt="WhatsApp"> -->
          </a>
          <a href="#" class="mobile-menu__social-link">
            <!-- <img src="/images/social/viber.svg" alt="Viber"> -->
          </a>
          <a href="#" class="mobile-menu__social-link">
            <!-- <img src="/images/social/skype.svg" alt="Skype"> -->
          </a>
          <a href="#" class="mobile-menu__social-link">
            <!-- <img src="/images/social/instagram.svg" alt="Instagram"> -->
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}
</script>

<style lang="scss" scoped>
.header {
  background: $background-light;
  padding: $spacer * 1;
  box-shadow: $shadow-sm;

  @media (max-width: $mobile) {
    padding: $spacer-2 * 1.5;
  }
}

.container {
  max-width: $container-max-width;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $spacer-3 * 1.25;
  }

  &__logo {
    flex-shrink: 0;
    
    @media (max-width: $desktop) {
      max-width: 180px;
    }
    
    @media (max-width: $mobile) {
      max-width: 140px;
    }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    @media (max-width: $desktop) {
      display: none;
    }
  }

  &__phone {
    color: $text-primary;
    text-decoration: none;
    font-weight: $font-weight-medium;
    font-size: $font-size-base * 1.125;
  }

  &__hours {
    color: $text-secondary;
    font-size: $font-size-sm;
  }

  &__nav {
    margin-left: auto;
    
    @media (max-width: $desktop) {
      display: none;
    }
  }

  &__menu {
    display: flex;
    gap: $spacer * 2;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__menu-link {
    color: $text-primary;
    text-decoration: none;
    font-size: $font-size-base;
    transition: $transition-base;
    
    &:hover {
      color: $primary;
    }
  }

  &__button {
    background: $primary;
    color: $text-light;
    border: 1px solid $primary;
    padding: $spacer-2 * 1.5 $spacer-3 * 1.5;
    border-radius: $border-radius-sm;
    cursor: pointer;
    font-size: $font-size-base;
    transition: $transition-base;
    
    &:hover {
      @media (min-width: $mobile) {
        background: transparent;
        color: $primary;
      }
    }
    
    @media (max-width: $desktop) {
      display: none;
    }
  }

  &__menu-btn {
    display: none;
    background: $primary;
    color: $text-light;
    border: 1px solid $primary;
    padding: $spacer-1 * 2 $spacer-2 * 2;
    border-radius: $border-radius-sm;
    font-size: $font-size-sm;
    cursor: pointer;
    transition: $transition-base;
    
    &:hover {
      @media (min-width: $mobile) {
        background: transparent;
        color: $primary;
      }
    }
    
    @media (max-width: $desktop) {
      display: block;
    }
  }
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background: $background-light;
  z-index: 100;
  transform: translateX(100%);
  transition: $transition-slow;
  display: flex;
  flex-direction: column;
  
  @media (max-width: $mobile) {
    max-width: 100%;
  }
  
  &.is-open {
    transform: translateX(0);
  }
  
  &__header {
    padding: $spacer;
    display: flex;
    justify-content: flex-end;
  }
  
  &__close {
    background: none;
    border: none;
    font-size: $font-size-2xl * 0.75;
    color: $text-primary;
    cursor: pointer;
    padding: $spacer-1 * 2;
  }
  
  &__nav {
    padding: $spacer-3 * 1.25;
    flex-grow: 1;
  }
  
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: $spacer-3 * 1.5;
  }
  
  &__link {
    color: $text-primary;
    text-decoration: none;
    font-size: $font-size-lg * 1.25;
    font-weight: $font-weight-medium;
  }
  
  &__footer {
    padding: $spacer-3 * 1.25;
    display: flex;
    flex-direction: column;
    gap: $spacer-3 * 1.25;
    align-items: center;
    border-top: 1px solid $border-color;
  }
  
  &__button {
    background: $primary;
    color: $text-light;
    border: 1px solid $primary;
    padding: $spacer-2 * 1.5;
    border-radius: $border-radius-sm;
    cursor: pointer;
    font-size: $font-size-base;
    width: 100%;
    margin-bottom: $spacer-3;
    transition: $transition-base;
    
    &:hover {
      @media (min-width: $mobile) {
        background: transparent;
        color: $primary;
      }
    }
  }
  
  &__phone {
    color: $text-primary;
    text-decoration: none;
    font-size: $font-size-base;
    font-weight: $font-weight-medium;
  }
  
  &__social {
    display: flex;
    gap: $spacer;
    margin-top: $spacer-2 * 1.25;
    
    &-link {
      width: $spacer-3 * 1.5;
      height: $spacer-3 * 1.5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>