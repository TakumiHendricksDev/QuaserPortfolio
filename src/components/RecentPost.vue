<template>
  <div class="bg-grey-10 q-py-xl q-px-xl shadow-10">
    <div class="text-h4 text-bold text-yellow-10 q-mb-lg">Recent Post</div>
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
</template>

<script setup>
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { onMounted, ref } from "vue";
import PostCard from "components/PostCard.vue";

const posts = ref([]);

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
