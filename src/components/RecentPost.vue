<template>
  <div>
    <h4 class="text-bold">Recent Post</h4>
    <div v-for="post in posts" :key="post.id">
      <post-card :post="post" />
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
