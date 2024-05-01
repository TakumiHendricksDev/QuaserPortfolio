<template>
  <q-page>
    <div class="row justify-center q-mb-xl">
      <div class="col-12 col-md-8 col-lg-6 text-center">
        <div
          class="text-h1-responsive text-weight-bold letter-space-lg text-grey-9"
        >
          Takumi Hendricks
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
        <div class="flex justify-center">
          <div class="flex justify-between" style="width: 300px">
            <q-btn
              color="dark"
              label="Contact Me"
              to="/contact"
            />
            <q-btn
              color="dark"
              label="My Resume"
              @click="getResume()"
            />
          </div>
        </div>
      </div>
    </div>
    <recent-post />
  </q-page>
</template>

<script setup>
import RecentPost from "components/RecentPost.vue";
import {getFile} from "src/utils/util";

const resumePath = 'docs/New Software Engineering Resume 2024.pdf';

async function getResume() {
  const downloadUrl = await getFile(resumePath);
  window.open(downloadUrl, '_blank');
}
</script>
