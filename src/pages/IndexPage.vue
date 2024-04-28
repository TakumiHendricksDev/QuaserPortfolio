<template>
  <q-page >
    <div class="q-pa-xl q-mb-xl q-mt-md">
      <p class="text-h1 text-weight-bold letter-space-lg q-mb-sm text-grey-9">
          I'm Takumi
        </p>
        <p class="text-h1 text-weight-bold letter-space-lg q-mb-sm text-grey-9">
          Hendricks
        </p>
        <p class="text-h1 text-weight-bold letter-space-xl text-indigo">
          Software Engineer
        </p>
        <p class="text-h5 text-gray-8">
          I'm a software engineer with a passion for building web applications.
          <br />I'm proficient in frameworks such as Django, Vue.js, and React
        </p>
    </div>
    <recent-post />
  </q-page>
</template>

<script setup>
import RecentPost from "components/RecentPost.vue";
</script>
