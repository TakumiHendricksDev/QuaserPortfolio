<template>
  <div class="bg-grey-10 q-py-xl q-px-xl shadow-10">
    <div class="flex q-mb-lg">
      <div class="text-h4 text-bold text-grey-1 q-mr-lg">Recent Post</div>
      <!--      <q-btn-->
      <!--        color="grey-9"-->
      <!--        label="Subscribe to my newsletter"-->
      <!--        icon="mail"-->
      <!--        size="md"-->
      <!--        @click="prompt = true"-->
      <!--      />-->
    </div>
    <hr class="q-mb-lg" />
    <div class="flex">
      <post-card
        v-for="post in recentPosts()"
        :key="post.id"
        :post="post"
        class="q-mr-lg q-mb-lg"
      />
    </div>
  </div>

  <!--  <q-dialog v-model="prompt" persistent>-->
  <!--      <q-card style="min-width: 350px">-->
  <!--        <q-card-section>-->
  <!--          <div class="text-h6">Your Email Address</div>-->
  <!--        </q-card-section>-->

  <!--        <q-card-section class="q-pt-none q-mb-lg">-->
  <!--          <q-input filled type="email" v-model="emailAddress" autofocus @keyup.enter="prompt = false" />-->
  <!--        </q-card-section>-->

  <!--        <q-card-actions align="right" class="text-primary">-->
  <!--          <q-btn dark-percentage color="dark" label="Cancel" v-close-popup />-->
  <!--          <q-btn dark-percentage color="dark" label="Add to newsletter" v-close-popup />-->
  <!--        </q-card-actions>-->
  <!--      </q-card>-->
  <!--    </q-dialog>-->
</template>

<script setup>
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { onMounted, ref } from "vue";
import PostCard from "components/PostCard.vue";

const posts = ref([]);
const prompt = ref(false);
const emailAddress = ref("");

function recentPosts() {
  return posts.value.slice(0, 5);
}

async function getPosts() {
  const postCollection = collection(db, "post");
  // Get all posts ordered by created_at in descending order
  const q = query(postCollection, orderBy("created_at", "desc"));
  const postSnapshot = await getDocs(q);
  return postSnapshot.docs.map((doc) => doc.data());
}

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
