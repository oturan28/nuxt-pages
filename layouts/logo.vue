<script setup lang="ts">
</script>
<template>
  <div class="container mx-auto px-30">
    <div class="pb-20 pt-10">
      <img src="https://www.anwalt.de/img/anwalt.de-logo.svg" class="img-fluid" width="300" height="25" alt="Anwalt suchen und finden bei anwalt.de">
    </div>
    <main id="content">
      <div class="w-full">
        <slot />
      </div>
    </main>
  </div>
  <Footer />
</template>
