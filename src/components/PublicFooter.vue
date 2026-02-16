<template>
  <footer class="py-12 border-t border-gray-800 text-center text-gray-500 text-sm">
    <div class="flex justify-center space-x-6 mb-4">
      <router-link to="/" class="hover:text-white transition-colors">{{ $t('nav.home') }}</router-link>
      <router-link to="/features" class="hover:text-white transition-colors">{{ $t('home.hero.learnMore') }}</router-link>
      <router-link to="/contact" class="hover:text-white transition-colors">{{ $t('nav.contact') }}</router-link>
    </div>
    <p>&copy; 2026 ThreadStocks. {{ $t('footer.rights') }}</p>
  </footer>
</template>