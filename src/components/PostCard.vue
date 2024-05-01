<template>
  <router-link
    class="block none-decoration border-yellow-10 q-pa-md card-sm text-white bg-grey-10"
    :to="`/posts/${post.id}`"
  >
    <div class="text-bold text-h6">{{ post.title }}</div>
    <div class="q-mb-xl">{{ post.description }}</div>
    <div class="flex justify-end text-grey-3">
      {{ formatDate(post.created_at) }}
    </div>
  </router-link>
</template>

<script setup>
import { formatDate } from "../utils/util";

defineProps(["post"]);
</script>
