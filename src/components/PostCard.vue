<template>
  <div class="q-card--bordered q-pa-md">
    <p class="text-bold text-h6">{{ post.title }}</p>
    <p>{{ post.description }}</p>
  </div>
</template>

<script setup>
  defineProps(["post"])
</script>
