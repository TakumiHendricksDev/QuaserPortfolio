<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-lg">
      <q-toolbar class="q-mb-md">
        <q-toolbar-title class="text-black text-weight-regular">
          Takumi Hendricks
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="menu"
          v-if="$q.screen.lt.md"
          @click="drawerOpen = !drawerOpen"
          class="text-grey-9"
        />
        <q-tabs v-model="tab" class="text-grey-8" shrink v-if="$q.screen.gt.sm">
          <router-link class="none-decoration text-indigo" to="/">
            <q-tab name="/" label="Home" />
          </router-link>
          <router-link class="none-decoration text-indigo" to="/posts">
            <q-tab name="/posts" label="Posts" />
          </router-link>
          <router-link class="none-decoration text-indigo" to="/contact">
            <q-tab name="/contact" label="Contact Me" />
          </router-link>
        </q-tabs>
      </q-toolbar>
      <q-banner
        inline-actions
        rounded
        class="bg-indigo text-white"
        v-if="showBanner"
      >
        This portfolio website is still in development. Many features are not
        yet implemented.
        <template v-slot:action>
          <q-btn flat label="Dismiss" @click="hideBanner()" />
        </template>
      </q-banner>
    </q-header>

    <q-drawer v-model="drawerOpen" side="left" bordered>
      <q-list>
        <q-item class="text-h5" v-ripple>Menu</q-item>
        <q-item clickable v-ripple to="/">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/posts">
          <q-item-section>Posts</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contact">
          <q-item-section>Contact Me</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
// Set the tab to the current route path
const tab = ref(route.path);
const drawerOpen = ref(false);
const showBanner = ref(true);

function hideBanner() {
  showBanner.value = false;
}
</script>
