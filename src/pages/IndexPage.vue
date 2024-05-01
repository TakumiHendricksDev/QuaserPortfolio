<template>
  <q-page>
    <div class="row justify-center q-mb-xl">
      <div class="col-12 col-md-8 col-lg-6 text-center">
        <div
          class="text-h1-responsive text-weight-bold letter-space-lg text-grey-9"
        >
          <span class="text-yellow-10">&lt;/</span>Takumi Hendricks<span class="text-yellow-10">&gt;</span>
        </div>
        <div
          class="text-h2-responsive text-weight-bold letter-space-xl text-yellow-10 q-mb-xl"
        >
          Software Engineer
        </div>
        <img
          class="img-card-round img-responsive q-mb-lg shadow-5"
          src="https://canopyteam.org/wp-content/uploads/2022/12/hendricks.jpg"
          alt="picture of me"
        />
        <p class="text-h6-responsive text-grey-9">
          I'm a software engineer with a passion for building web applications.
          <br />I'm proficient in frameworks such as Django, Vue.js and Firebase
        </p>
      </div>
    </div>
    <recent-post />
  </q-page>
</template>

<script setup>
import RecentPost from "components/RecentPost.vue";
</script>
