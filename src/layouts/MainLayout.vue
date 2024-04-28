<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-lg">
      <q-toolbar>
        <q-toolbar-title class="text-black text-weight-regular">
          Takumi Hendricks
        </q-toolbar-title>
        <q-tabs v-model="tab" class="text-grey-8" shrink>
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
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref} from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
// Set the tab to the current route path
const tab = ref(route.path);
</script>
