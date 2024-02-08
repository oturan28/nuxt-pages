<script setup lang="ts">
import {AnwButton, AnwModal} from "@anwalt.de/tailwind-design-system";
import { AnwAccordion } from "@anwalt.de/tailwind-design-system";
import {PhosphorIconSignOut, PhosphorIconUserCircle} from "#components";

const showSidebar = ref(false)
const showModal = ref(false)
watch(() => showSidebar.value, (value) => {
  if (value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

const { data: navigation } = await useAsyncData('navigation', () => queryContent('/navigation').findOne())
const { data: headerLinks } = await useAsyncData('header', () => queryContent('/header').findOne())

const { user } = useUserStore()
</script>
<template>
  <ul class="bg-white p-4 flex justify-between items-center">
    <li>
      <PhosphorIconList @click="showSidebar = !showSidebar" class="md:hidden" :size="32"/>
    </li>
    <li>
      <img src="https://www.anwalt.de/img/anwalt.de-logo.svg" width="185" height="35" alt="Anwalt suchen und finden bei anwalt.de">
    </li>
    <li class="hidden md:block">
      <div class="flex justify-between">
        <a v-for="link in headerLinks.links" :href="link.href" :title="link.title" class="mx-3 !text-black hover:underline-offset-4 hover:decoration-primary decoration-4">{{ link.text }}</a>
      </div>
    </li>
    <li class="flex items-center">
      <a href="/anwaelte" class="hidden md:inline mx-3 !text-orange-500 hover:!no-underline">Sie sind Anwalt?</a>
      <div class="relative group">
        <PhosphorIconList class="hidden md:inline text-gray" :size="32"/>
        <PhosphorIconUserCircle class="hidden md:inline" weight="duotone" :size="32"/>
        <div id="sidebar-navigation" :class="showSidebar ? 'transform-none' : '-translate-x-full'" class="md:top-8 md:left-auto md:right-0 md:invisible group-hover:visible md:transform-none md:absolute md:block md:border-2 fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-80" tabindex="-1" aria-labelledby="drawer-label" aria-modal="true" role="dialog">
          <img class="mx-auto my-4 md:hidden" src="https://www.anwalt.de/img/anwalt.de-logo.svg" width="185" height="35" alt="Anwalt suchen und finden bei anwalt.de">
          <div class="p-4 border-t-2 md:border-0">
            <div v-if="user">
              <div class="flex items-center">
                <PhosphorIconUserCircle :size="24"/>
                <a href="/konto" class="my-3 !text-black">{{ user.name }}</a>
              </div>
              <AnwButton class="w-full mb-3 md:hidden" label="Mein Konto" appearance="secondaryOutline" :icon="PhosphorIconUserCircle" />
              <AnwButton class="w-full" label="Abmelden" appearance="primaryOutline" :icon="PhosphorIconSignOut"/>
            </div>
            <div v-else>
              <AnwButton class="w-full" label="Anmelden" appearance="primaryOutline" />
            </div>
         </div>
          <AnwAccordion v-for="item in navigation.body" :key="item.title" :label="item.title" appearance="white">
            <a v-for="link in item.links" class="block my-3 !text-black hover:!text-primary hover:!no-underline" :href="link.href" :key="link.title" :title="link.title">{{ link.text }}</a>
          </AnwAccordion>
        </div>
      </div>
    </li>
    <li>
      <PhosphorIconMagnifyingGlass @click="showModal = !showModal" class="border-2 p-0.5 rounded border-primary text-primary md:hidden" :size="32"/>
      <AnwModal :is-modal-open="showModal"></AnwModal>
    </li>
  </ul>
  <div v-if="showSidebar" @click="showSidebar = !showSidebar" class="bg-gray-900/50 fixed inset-0 z-30"></div>
</template>
