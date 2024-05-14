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
          class="text-h2-responsive text-weight-bold letter-space-xl text-primary q-mb-xl"
        >
          Software Engineer
        </div>
        <img
          class="img-card-round img-responsive q-mb-lg shadow-5"
          src="https://canopyteam.org/wp-content/uploads/2022/12/hendricks.jpg"
          alt="picture of me"
        />
        <p class="text-h6-responsive text-grey-9 q-mb-lg">
          I'm a software engineer with a passion for building web applications.
          <br />I'm proficient in frameworks such as Django, Vue.js and Firebase
        </p>
        <div class="flex justify-center">
          <div class="flex justify-between" style="width: 400px">
            <q-btn
              color="primary"
              label="Contact Me"
              icon="mail"
              size="md"
              to="/contact"
            />
            <q-btn
              color="primary"
              icon="cookie"
              size="md"
              label="My Resume"
              @click="getResume()"
            />
          </div>
        </div>
      </div>
    </div>
    <recent-post />
    <div class="q-py-xl q-px-xl">
      <div class="flex q-mb-lg">
        <div class="text-h4 text-bold text-dark q-mr-lg">Projects</div>
      </div>
      <div class="flex">
        <a
          href="https://icospheregames.vercel.app/"
          target="_blank"
          class="project-card shadow-10 full-width"
        >
          <div class="text-bold text-h5 text-dark">IcosphereGames</div>
          <div class="text-grey-9">
            A website for a game development company. The website is built with
            Next.js and Firebase. It is a fictional company.
          </div>
          <q-icon name="launch" class="text-primary text-h6-responsive" />
        </a>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import RecentPost from "components/RecentPost.vue";
import { getFile } from "src/utils/util";
import PostCard from "components/PostCard.vue";

const resumePath = "docs/New Software Engineering Resume 2024.pdf";

async function getResume() {
  const downloadUrl = await getFile(resumePath);
  window.open(downloadUrl, "_blank");
}
</script>
