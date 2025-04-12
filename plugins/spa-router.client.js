// Цей плагін працює тільки на клієнті (client.js)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    // Прокрутка сторінки нагору при переході
    window.scrollTo(0, 0);
  });
}); 