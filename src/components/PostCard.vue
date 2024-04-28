<template>
  <div class="border-white rounded-borders q-pa-md card-sm text-white bg-grey-10">
    <div class="text-bold text-h6">{{ post.title }}</div>
    <div class="q-mb-xl">{{ post.description }}</div>
    <div class="flex justify-end text-grey-3">{{ formatDate(post.created_at) }}</div>
  </div>
</template>

<script setup>
  defineProps(["post"])

  function formatDate(timestamp) {
    // Convert seconds to milliseconds and add nanoseconds converted to milliseconds
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return `${month} ${day}, ${year} at ${time}`;
  }
</script>
