<template>
  <div class="bg-grey-10 q-py-xl q-px-xl shadow-10">
    <div class="text-h4 text-bold text-grey-2 q-mb-xl">Recent Post</div>
    <div class="flex">
      <post-card v-for="post in posts" :key="post.id" :post="post" class="q-mr-lg" />
    </div>
  </div>
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
