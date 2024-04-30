<template>
  <q-page>
    <div class="row justify-center q-mt-xl q-mb-xl">
      <div class="col-12 col-md-8 col-lg-6 text-center flex flex-center">
        <div>
          <div class="text-h2-responsive text-weight-bold letter-space-lg q-mb-sm text-grey-9">
            Posts
          </div>
          <div class="text-h6-responsive text-grey-9 text-weight-regular">
            Here are posts of many things I've learned about in my career.
          </div>
        </div>

        <q-input
          v-model="search"
          label="Search"
          dense
          outlined
          class="q-mt-xl input-lg"
        />
      </div>
    </div>
    <div class="q-pa-xl bg-dark vh-full">
      <div class="flex">
        <post-card
          v-for="post in posts"
          :key="post.id"
          :post="post"
          class="q-mr-md q-mb-md"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { onMounted, ref, watch } from "vue";
import PostCard from "components/PostCard.vue";

const posts = ref([]);
const search = ref("");

async function getPosts() {
  let postCollection = collection(db, "post");

  // If search value is not empty, filter the posts
  if (search.value) {
    postCollection = query(
      postCollection,
      where("title", ">=", search.value),
      where("title", "<=", search.value + "\uf8ff")
    );
  }

  const postSnapshot = await getDocs(postCollection);
  return postSnapshot.docs.map((doc) => doc.data());
}

onMounted(async () => {
  posts.value = await getPosts();
});

// Watch for changes in the search value
watch(search, async (newSearchValue, oldSearchValue) => {
  // Fetch posts again whenever the search value changes
  posts.value = await getPosts();
});
</script>
