<template>
  <q-page>
    <ais-instant-search :search-client="searchClient" index-name="Post">
      <div class="row justify-center q-mt-xl q-mb-xl">
        <div class="text-center flex column flex-center">
          <div
            class="text-h2-responsive text-weight-bold q-mb-sm text-primary"
          >
            Posts
          </div>
          <div
            class="text-h6-responsive text-grey-8 text-weight-regular q-mb-lg"
          >
            Here are posts of many things I've learned about in my career.
          </div>

          <ais-search-box />
        </div>
      </div>
      <div class="q-pa-xl bg-dark vh-full">
        <ais-hits>
          <template v-slot:item="{ item }">
            <router-link
              class="none-decoration full-height flex-column-between"
              :to="`/posts/${item.id}`"
            >
              <div>
                <div class="text-h6 text-grey-1">{{ item.title }}</div>
                <div class="text-grey-2">{{ item.description }}</div>
              </div>
              <div>
                <div class="flex justify-end text-grey-4">
                  {{ formatDate(item.created_at) }}
                </div>
              </div>
            </router-link>
          </template>
        </ais-hits>
      </div>
    </ais-instant-search>
  </q-page>
</template>

<script setup>
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { onMounted, ref, watch } from "vue";
import PostCard from "components/PostCard.vue";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";
import { formatDate } from "../utils/util";

const posts = ref([]);
const search = ref("");
let searchClient = algoliasearch(
  process.env.VUE_APP_ALGOLIA_APP_ID,
  process.env.VUE_APP_ALGOLIA_SEARCH_KEY
);

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
  console.log(searchClient);
});

// Watch for changes in the search value
watch(search, async (newSearchValue, oldSearchValue) => {
  // Fetch posts again whenever the search value changes
  posts.value = await getPosts();
});
</script>
