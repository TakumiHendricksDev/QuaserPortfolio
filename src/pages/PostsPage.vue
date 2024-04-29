<template>
  <q-page>
    <div class="q-pa-xl">
      <div class="text-h2 text-bold text-grey-9 q-mb-xl">Posts</div>
      <div class="flex column">
        <post-card v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { onMounted, ref } from "vue";
import PostCard from "components/PostCard.vue";

const posts = ref([]);
async function getPosts() {
  const postCollection = collection(db, "post");
  const postSnapshot = await getDocs(postCollection);
  return postSnapshot.docs.map((doc) => doc.data());
}

onMounted(async () => {
  posts.value = await getPosts();
});
</script>

