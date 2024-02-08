<script setup lang="ts">
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main id="content" class="flex grow">
      <div class="w-full">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
